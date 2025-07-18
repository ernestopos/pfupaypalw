/*import { PDFDocument, rgb } from 'pdf-lib';

async function generatePDF(donation) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([500, 300]);
  const { width, height } = page.getSize();

  page.drawText('Donation Certificate', {
    x: 50,
    y: height - 50,
    size: 24,
    color: rgb(0, 0.53, 0.71)
  });

  page.drawText(`Donor: ${donation.resource.payer.name.given_name} ${donation.resource.payer.name.surname}`, {
    x: 50,
    y: height - 100
  });

  page.drawText(`Email: ${donation.resource.payer.email_address}`, {
    x: 50,
    y: height - 130
  });

  page.drawText(`Amount: $${donation.resource.purchase_units[0].amount.value} ${donation.resource.purchase_units[0].amount.currency_code}`, {
    x: 50,
    y: height - 160
  });

  page.drawText(`Transaction ID: ${donation.resource.id}`, {
    x: 50,
    y: height - 190
  });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}

async function sendEmail(to, pdfBytes) {
  // Aquí puedes integrar Resend, Mailgun u otro servicio
  // como ejemplo básico con Resend:
  const apiKey = 're_YrexVKoF_L3CUHrfdx7P46PMyDYL6PZxV';
  const base64PDF = btoa(String.fromCharCode(...pdfBytes));

  await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      from: 'pfu.info@peerkals.com',
      to: to,
      subject: 'Certificado de donación - PFU',
      html: '<p>Gracias por tu generosa donación. Adjuntamos tu certificado.</p>',
      attachments: [
        {
          filename: 'donation_certificate.pdf',
          content: base64PDF
        }
      ]
    })
  });
}*/

/*export default {
  async fetch(request) {
    if (request.method === 'POST') {
      const donation = await request.json();
      const pdfBytes = await generatePDF(donation);
      const email = donation.resource.payer.email_address;

      await sendEmail(email, pdfBytes);

      return new Response('Certificado enviado', { status: 200 });
    }

    return new Response('Método no permitido', { status: 405 });
  }
};*/

export async function onRequestPost(context) {
  //const donation = await context.request.json();
  //const pdfBytes = await generatePDF(donation);

  // Aún no enviamos correo en este paso (puedes integrarlo luego)
  return new Response('PDF generado', { status: 200 });
}