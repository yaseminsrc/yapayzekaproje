'use server';

import { z } from 'zod';
import { format } from 'date-fns';

const appointmentSchema = z.object({
  ad: z.string(),
  telefon: z.string(),
  email: z.string().email(),
  hizmet: z.string(),
  tarih: z.date(),
  saat: z.string(),
});

type AppointmentData = z.infer<typeof appointmentSchema>;

export async function submitAppointment(data: AppointmentData) {
  const parsedData = appointmentSchema.safeParse(data);

  if (!parsedData.success) {
    return { success: false, error: 'Geçersiz veri.' };
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL || '[N8N WEBHOOK URL]';
  if (webhookUrl === '[N8N WEBHOOK URL]') {
     console.warn('N8N_WEBHOOK_URL is not set. Using placeholder.');
  }

  const payload = {
    ...parsedData.data,
    tarih: format(parsedData.data.tarih, 'yyyy-MM-dd'),
  };

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      // Log server error response for debugging
      const errorBody = await response.text();
      console.error(`Webhook error: ${response.status} ${response.statusText}`, errorBody);
      return { success: false, error: 'Randevu sunucuya gönderilemedi.' };
    }

    return { success: true };
  } catch (error) {
    console.error('Error submitting appointment:', error);
    return { success: false, error: 'Randevu gönderilirken bir ağ hatası oluştu.' };
  }
}
