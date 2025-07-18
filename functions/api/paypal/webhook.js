export async function onRequestPost(context) {
  try {
    const body = await context.request.json();

    console.log('✅ PayPal Webhook received:', JSON.stringify(body, null, 2));

    // Aquí puedes agregar lógica para guardar el body o generar un certificado de donación

    return new Response(
      JSON.stringify({ message: 'Webhook received successfully' }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  } catch (error) {
    console.error('❌ Error parsing webhook:', error);

    return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}