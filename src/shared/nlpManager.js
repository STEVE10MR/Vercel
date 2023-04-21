const { containerBootstrap } = require('@nlpjs/core');
const { NluManager, NluNeural } = require('@nlpjs/nlu');
const { LangEs } = require('@nlpjs/lang-es');



let manager;


function addGoodByeEs(manager){
  manager.assignDomain('es', 'despedida', 'despedida');
  manager.add('es', 'adios', 'despedida');
  manager.add('es', 'Gracias por la maravillosa experiencia culinaria. Ha sido un placer.', 'despedida');
  manager.add('es', 'Quiero expresar mi gratitud por la deliciosa comida y el excelente servicio. ¡Gracias y adiós!', 'despedida');
  manager.add('es', 'Agradezco la atención y el trato amable del personal. ¡Hasta luego y gracias por todo!', 'despedida');
  manager.add('es', 'Ha sido un verdadero placer disfrutar de la gastronomía de este lugar. ¡Gracias y adiós!', 'despedida');
  manager.add('es', 'Quiero agradecerles por la experiencia culinaria excepcional. ¡Hasta pronto y muchas gracias!', 'despedida');
  manager.add('es', 'Me despido con gratitud por la deliciosa comida y el ambiente acogedor. ¡Gracias y adiós!', 'despedida');
  manager.add('es', 'Agradezco la calidad de los platillos y la calidez del servicio en este restaurante. ¡Hasta la próxima y muchas gracias!', 'despedida');
  manager.add('es', 'Ha sido un placer degustar los exquisitos sabores que ofrece este lugar. ¡Gracias y adiós, hasta pronto!', 'despedida');
  manager.add('es', 'Quiero expresar mi agradecimiento por la atención personalizada y la calidad de la comida. ¡Hasta la próxima y muchas gracias!', 'despedida');
  manager.add('es', 'Me despido con gratitud por la experiencia gastronómica única que he tenido en este restaurante. ¡Gracias por la deliciosa comida y adiós!', 'despedida');
  manager.add('es', 'Agradezco el trato amable y el cuidado en cada detalle que he recibido en este lugar. ¡Hasta pronto y muchas gracias por todo!', 'despedida');
  manager.add('es', 'Ha sido un verdadero placer saborear los deliciosos platillos de este restaurante. ¡Gracias y adiós, hasta la próxima!', 'despedida');
  manager.add('es', 'Es hora de irme, pero antes quiero agradecerles por la excelente comida y el servicio impecable. ¡Hasta la próxima y gracias!', 'despedida');
  manager.add('es', 'Quiero expresar mi agradecimiento por la experiencia culinaria única que he tenido en este restaurante. ¡Gracias y adiós!', 'despedida');
  manager.add('es', 'Ha sido un placer disfrutar de los sabores y aromas de la cocina de este lugar. ¡Hasta luego y muchas gracias!', 'despedida');
  manager.add('es', 'Me despido con gratitud por la atención y la calidad de los platillos que he disfrutado en este restaurante. ¡Gracias y adiós!', 'despedida');
  manager.add('es', 'Agradezco la hospitalidad y el sabor de la comida en este restaurante. ¡Hasta pronto y muchas gracias!', 'despedida');
  manager.add('es', 'Quiero agradecerles por la experiencia culinaria excepcional que he tenido en este lugar. ¡Gracias y adiós!', 'despedida');
  manager.add('es', 'Ha sido un verdadero placer disfrutar de la gastronomía de este restaurante. ¡Gracias y hasta la próxima!', 'despedida');
  manager.add('es', 'Me despido con gratitud por la deliciosa comida y el servicio atento que he recibido en este lugar. ¡Gracias y adiós!', 'despedida');
  manager.add('es', 'Agradezco la calidad de los platillos y el ambiente acogedor de este restaurante. ¡Hasta la próxima y muchas gracias!', 'despedida');
  manager.add('es', 'Quiero expresar mi agradecimiento por la atención personalizada y la experiencia culinaria memorable. ¡Gracias y adiós!', 'despedida');
  manager.add('es', 'Me despido con gratitud por la deliciosa comida y el trato amable del personal en este restaurante. ¡Hasta pronto y muchas gracias!', 'despedida');
  manager.add('es', 'Es hora de irme, pero antes quiero agradecerles por la excelente comida y el servicio impecable. ¡Hasta la próxima y gracias!', 'despedida');
  manager.add('es', 'Quiero expresar mi agradecimiento por la experiencia culinaria única que he tenido en este restaurante. ¡Gracias y adiós!', 'despedida');
  manager.add('es', 'Ha sido un placer disfrutar de los sabores y aromas de la cocina de este lugar. ¡Hasta luego y muchas gracias!', 'despedida');
  manager.add('es', 'Me despido con gratitud por la atención y la calidad de los platillos que he disfrutado en este restaurante. ¡Gracias y adiós!', 'despedida');
  manager.add('es', 'Agradezco la hospitalidad y el sabor de la comida en este restaurante. ¡Hasta pronto y muchas gracias!', 'despedida');
  manager.add('es', 'Quiero agradecerles por la experiencia culinaria excepcional que he tenido en este lugar. ¡Gracias y adiós!', 'despedida');
  manager.add('es', 'Ha sido un verdadero placer disfrutar de la gastronomía de este restaurante. ¡Gracias y hasta la próxima!', 'despedida');
  manager.add('es', 'Me despido con gratitud por la deliciosa comida y el servicio atento que he recibido en este lugar. ¡Gracias y adiós!', 'despedida');
  manager.add('es', 'Agradezco la calidad de los platillos y el ambiente acogedor de este restaurante. ¡Hasta la próxima y muchas gracias!', 'despedida');
  manager.add('es', 'Quiero expresar mi agradecimiento por la atención personalizada y la experiencia culinaria memorable. ¡Gracias y adiós!', 'despedida');
  manager.add('es', 'Me despido con gratitud por la deliciosa comida y el trato amable del personal en este restaurante. ¡Hasta pronto y muchas gracias!', 'despedida');
}


function addGreetingDomainEs(manager) {
  manager.assignDomain('es', 'saludo', 'saludo');
  manager.add('es', 'hola', 'saludo');
  manager.add('es', 'buenos días', 'saludo');
  manager.add('es', 'buenas tardes', 'saludo');
  manager.add('es', 'buenas noches', 'saludo');
  manager.add('es', 'hey', 'saludo');
  manager.add('es', 'cómo estás?', 'saludo');
  manager.add('es', 'qué tal?', 'saludo');
  manager.add('es', 'saludos', 'saludo');
  manager.add('es', 'hi', 'saludo');
  manager.add('es', '¡Hola, qué tal!', 'saludo');
  manager.add('es', '¡Buen día, compañero/a!', 'saludo');
  manager.add('es', '¡Hola, espero que estés bien!', 'saludo');
  manager.add('es', '¡Saludos, ¿cómo estás hoy?', 'saludo');
  manager.add('es', '¡Hola, amigo/a mío/a!', 'saludo');
  manager.add('es', '¡Buenas, que estés excelente!', 'saludo');
  manager.add('es', '¡Hola, cómo va todo por allá!', 'saludo');
  manager.add('es', '¡Saludos, espero que todo esté bien!', 'saludo');
  manager.add('es', '¡Hola, qué planes tienes para hoy!', 'saludo');
  manager.add('es', '¡Buen día, estimado/a amigo/a!', 'saludo');
  manager.add('es', '¡Hola, que tengas un buen día!', 'saludo');
  manager.add('es', '¡Saludos, qué bueno verte de nuevo!', 'saludo');
  manager.add('es', '¡Hola, cómo te ha ido!', 'saludo');
  manager.add('es', '¡Buenas, espero que estés genial!', 'saludo');
  manager.add('es', '¡Hola, qué tal te encuentras!', 'saludo');
  manager.add('es', '¡Saludos, amigo/a mío/a!', 'saludo');
  manager.add('es', '¡Hola, qué hay de nuevo!', 'saludo');
  manager.add('es', '¡Buen día, mi estimado/a amigo/a!', 'saludo');
  manager.add('es', '¡Hola, espero verte pronto!', 'saludo');
  manager.add('es', '¡Saludos, qué alegría verte!', 'saludo');
  manager.add('es', '¡Hola, cómo estás hoy!', 'saludo');
  manager.add('es', '¡Buenas, qué te trae por aquí!', 'saludo');
  manager.add('es', '¡Hola, espero que todo marche bien!', 'saludo');
  manager.add('es', '¡Saludos, qué bueno encontrarnos!', 'saludo');
  manager.add('es', '¡Hola, cómo te va por ahí!', 'saludo');
  manager.add('es', '¡Buen día, buen amigo/a mío/a!', 'saludo');
  manager.add('es', '¡Hola, qué cuentas de nuevo!', 'saludo');
  manager.add('es', '¡Saludos, espero que estés en tu mejor momento!', 'saludo');
  manager.add('es', '¡Hola, espero que tengas un excelente día!', 'saludo');
  manager.add('es', '¡Buenas, qué te parece si nos vemos pronto!', 'saludo');
  manager.add('es', '¡Hola, qué alegría encontrarnos!', 'saludo');
  manager.add('es', '¡Saludos, qué planes tienes para hoy!', 'saludo');
  manager.add('es', '¡Hola, espero verte pronto de nuevo!', 'saludo');
  manager.add('es', '¡Buen día, estimado/a amigo/a mío/a!', 'saludo');
  manager.add('es', '¡Hola, espero que estés disfrutando tu día!', 'saludo');
  manager.add('es', '¡Saludos, espero que estés en tu mejor momento!', 'saludo');
  manager.add('es', '¡Hola, buenos días, mi estimado/a!', 'saludo');
  manager.add('es', '¡Saludos cordiales!', 'saludo');
  manager.add('es', '¡Buen día, amigo/a!', 'saludo');
  manager.add('es', '¡Qué gusto verte de nuevo!', 'saludo');
  manager.add('es', '¡Hola, qué alegría verte!', 'saludo');
  manager.add('es', '¡Un saludo afectuoso!', 'saludo');
  manager.add('es', '¡Hola, cómo va todo!', 'saludo');
  manager.add('es', '¡Buenas, amigo/a mío/a!', 'saludo');
  manager.add('es', '¡Hola, cómo te trata la vida!', 'saludo');
  manager.add('es', '¡Saludos desde Perú!', 'saludo');
  manager.add('es', '¡Bendiciones, amigo/a!', 'saludo');
  manager.add('es', '¡Hola, qué tengas un excelente día!', 'saludo');
  manager.add('es', '¡Un abrazo fraterno!', 'saludo');
  manager.add('es', '¡Buen día, mi estimado/a!', 'saludo');
  manager.add('es', '¡Hola, qué hay de nuevo!', 'saludo');
  manager.add('es', '¡Hola, cómo estás hoy!', 'saludo');
  manager.add('es', '¡Buenas, buen amigo/a!', 'saludo');
  manager.add('es', '¡Hola, qué estés bien!', 'saludo');
  manager.add('es', '¡Un saludo con cariño!', 'saludo');
  manager.add('es', '¡Hola, espero que estés genial!', 'saludo');
  manager.add('es', '¡Saludos y bendiciones!', 'saludo');
  manager.add('es', '¡Hola, qué te cuento!', 'saludo');
  manager.add('es', '¡Un abrazo afectuoso!', 'saludo');
  manager.add('es', '¡Hola, cómo te va por ahí!', 'saludo');
  manager.add('es', '¡Buen día, buen amigo/a!', 'saludo');
  manager.add('es', '¡Hola, qué bueno verte!', 'saludo');
  manager.add('es', '¡Un abrazo caluroso!', 'saludo');
  manager.add('es', '¡Hola, qué planes tienes!', 'saludo');
  manager.add('es', '¡Saludos, espero estés bien!', 'saludo');
  manager.add('es', '¡Hola, mi querido/a amigo/a!', 'saludo');
  manager.add('es', '¡Buen día, estimado/a!', 'saludo');
  manager.add('es', '¡Hola, qué andas haciendo!', 'saludo');
  manager.add('es', '¡Saludos, qué bueno verte!', 'saludo');
  manager.add('es', '¡Hola, que tengas un buen día!', 'saludo');
  manager.add('es', '¡Un fuerte abrazo!', 'saludo');
  manager.add('es', '¡Hola, mi gran amigo/a!', 'saludo');
  manager.add('es', '¡Buen día, querido/a!', 'saludo');
  manager.add('es', '¡Hola, cómo te trata la vida!', 'saludo');
  manager.add('es', '¡Hola!', 'saludo');
  manager.add('es', '¡Buenos días!', 'saludo');
  manager.add('es', '¡Buenas tardes!', 'saludo');
  manager.add('es', '¡Buenas noches!', 'saludo');
  manager.add('es', '¡Hey!', 'saludo');
  manager.add('es', '¿Cómo estás?', 'saludo');
  manager.add('es', '¿Qué tal?', 'saludo');
  manager.add('es', '¡Saludos!', 'saludo');
  manager.add('es', '¡Hi!', 'saludo');
  manager.add('es', '¡Hola amigo/a!', 'saludo');
  manager.add('es', '¡Qué hay!', 'saludo');
  manager.add('es', '¡Hola, cómo estás!', 'saludo');
  manager.add('es', '¡Hola, buen día!', 'saludo');
  manager.add('es', '¡Hola, buenas tardes!', 'saludo');
  manager.add('es', '¡Hola, buenas noches!', 'saludo');
  manager.add('es', '¡Hola, qué tal!', 'saludo');
  manager.add('es', '¡Hola, qué pasa!', 'saludo');
  manager.add('es', '¡Hola, amigo/a mío/a!', 'saludo');
  manager.add('es', '¡Hola, mi buen amigo/a!', 'saludo');
  manager.add('es', '¡Hola, cómo te encuentras!', 'saludo');
  manager.add('es', '¡Hola, qué haces!', 'saludo');
  manager.add('es', '¡Hola, qué cuentas!', 'saludo');
  manager.add('es', '¡Hola, amigo/a mío/a!', 'saludo');
  manager.add('es', '¡Hola, qué tal tu día!', 'saludo');
  manager.add('es', '¡Hola, qué tal tu semana!', 'saludo');
  manager.add('es', '¡Hola, qué tal tu noche!', 'saludo');
  manager.add('es', '¡Hola, cómo te va!', 'saludo');
  manager.add('es', '¡Saludos, ¿qué tal todo?', 'saludo');
  manager.add('es', '¡Buen día, ¿cómo va todo?', 'saludo');
  manager.add('es', '¡Hola, ¿qué hay de nuevo?', 'saludo');
  manager.add('es', '¡Hola, ¿cómo estás?', 'saludo');
  manager.add('es', '¡Buen día, estimado/a amigo/a mío/a!', 'saludo')
  manager.add('es', '¡Hola, espero que estés disfrutando tu día!', 'saludo')
}

function addOrderDomainEs(manager) {


  const agregarPlatoIntent = {
    name: 'agregarPlato',
    utterances: ['Quiero agregar el plato {nombrePlato}', 'Agregar {nombrePlato} a mi pedido'],
    parameters: [
      {
        name: 'nombrePlato',
        required: true,
        entity: 'dish'
      }
    ]
  };
  const domainOrderRequestConfig = {
    domain: 'order.request',
    intents: [agregarPlatoIntent],
    parameters: {
      nombrePlato: 'Quiero el plato {nombrePlato}',
      agregarTodosPedidos: ['Agregar todos los pedidos','Agregar los pedidos'],
      listarPedidos: 'Listar mis pedidos',
    }
  };


  manager.assignDomain('es', 'order.request', domainOrderRequestConfig);
  manager.add('es', 'quiero hacer un pedido', 'order.request');
  manager.add('es', 'me gustaría ordenar algo', 'order.request');
  manager.add('es', 'necesito hacer un pedido', 'order.request');
  manager.add('es', 'quiero comprar algo', 'order.request');
  manager.add('es', 'necesito ordenar comida', 'order.request');
  manager.add('es', 'quisiera hacer un pedido', 'order.request');
  manager.add('es', 'quiero hacer un pedido para recoger en la tienda', 'order.request');
  manager.add('es', 'me gustaría pedir algo para llevar', 'order.request');
  manager.add('es', 'necesito ordenar comida para llevar', 'order.request');
  manager.add('es', 'quisiera solicitar una entrega rápida', 'order.request');
  manager.add('es', 'necesito pedir comida', 'order.request');
  manager.add('es', 'quiero hacer un pedido', 'order.request');
  manager.add('es', 'necesito hacer una compra', 'order.request');
  manager.add('es', 'me gustaría hacer un pedido', 'order.request');
  manager.add('es', 'quiero ordenar un producto', 'order.request');
  manager.add('es', 'necesito solicitar un producto', 'order.request');
  manager.add('es', 'quisiera hacer una compra en línea', 'order.request');
  manager.add('es', 'necesito comprar artículos', 'order.request');
  manager.add('es', 'quiero hacer un pedido', 'order.request');
  manager.add('es', 'me gustaría ordenar productos', 'order.request');
  manager.add('es', 'quiero hacer un pedido', 'order.request');
  manager.add('es', 'necesito hacer un pedido', 'order.request');
  manager.add('es', 'quisiera pedir', 'order.request');
  manager.add('es', 'necesito solicitar platos', 'order.request');
  manager.add('es', 'quiero hacer un pedido', 'order.request');
  manager.add('es', 'necesito ordenar platos', 'order.request');
  manager.add('es', 'me gustaría comprar', 'order.request');
  manager.add('es', 'quiero hacer un pedido de producto', 'order.request');
  manager.add('es', 'quisiera ordenar platos', 'order.request');
  manager.add('es', 'necesito comprar productos', 'order.request');
  manager.add('es', 'quiero hacer un pedido de productos', 'order.request');
  manager.add('es', 'necesito hacer una compra', 'order.request');
  manager.add('es', 'me gustaría ordenar comida', 'order.request');
  manager.add('es', '¡Hola! Me gustaría hacer un pedido para llevar', 'order.request');
  manager.add('es', '¡Hola! Quisiera solicitar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Necesito ordenar algo para delivery', 'order.request');
  manager.add('es', '¡Hola! Quiero comprar comida para llevar', 'order.request');
  manager.add('es', '¡Hola! Me gustaría solicitar algo para delivery', 'order.request');
  manager.add('es', '¡Hola! Quisiera hacer un pedido para delivery', 'order.request');
  manager.add('es', '¡Hola! Necesito solicitar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Me gustaría ordenar algo para llevar', 'order.request');
  manager.add('es', '¡Hola! Quiero comprar comida para delivery', 'order.request');
  manager.add('es', '¡Hola! Necesito hacer un pedido para llevar', 'order.request');
  manager.add('es', '¡Hola! Me gustaría solicitar algo a domicilio', 'order.request');
  manager.add('es', '¡Hola! Quisiera ordenar comida para llevar', 'order.request');
  manager.add('es', '¡Hola! Necesito comprar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Me gustaría hacer un pedido para llevar', 'order.request');
  manager.add('es', '¡Hola! Quiero solicitar algo para delivery', 'order.request');
  manager.add('es', '¡Hola! Necesito ordenar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Me gustaría comprar algo para llevar', 'order.request');
  manager.add('es', '¡Hola! Quisiera solicitar comida para delivery', 'order.request');
  manager.add('es', '¡Hola! Necesito hacer un pedido a domicilio', 'order.request');
  manager.add('es', '¡Hola! Me gustaría ordenar algo para delivery', 'order.request');
  manager.add('es', '¡Hola! Quiero comprar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Necesito solicitar algo para llevar', 'order.request');
  manager.add('es', '¡Hola! Me gustaría hacer un pedido para delivery', 'order.request');
  manager.add('es', '¡Hola! Quisiera ordenar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Necesito comprar algo para llevar', 'order.request');
  manager.add('es', '¡Hola! Me gustaría solicitar comida para delivery', 'order.request');
  manager.add('es', '¡Hola! Quiero hacer un pedido para llevar', 'order.request');
  manager.add('es', '¡Hola! Necesito ordenar algo a domicilio', 'order.request');
  manager.add('es', '¡Hola! Me gustaría comprar comida para llevar', 'order.request');
  manager.add('es', '¡Hola! Quisiera solicitar algo para delivery', 'order.request');
  manager.add('es', '¡Hola! Necesito hacer un pedido a domicilio', 'order.request');
  manager.add('es', '¡Hola! Quiero ordenar comida para delivery', 'order.request');
  manager.add('es', '¡Hola! Necesito solicitar comida para llevar', 'order.request');
  manager.add('es', '¡Hola! Me gustaría hacer un pedido a domicilio', 'order.request');
  manager.add('es', '¡Hola! Quisiera comprar algo para delivery', 'order.request');
  manager.add('es', '¡Hola! Necesito ordenar algo para llevar', 'order.request');
  manager.add('es', '¡Hola! Me gustaría solicitar algo a domicilio', 'order.request');
  manager.add('es', '¡Hola! Quiero hacer un pedido para delivery', 'order.request');
  manager.add('es', '¡Hola! Necesito comprar comida para llevar', 'order.request');
  manager.add('es', '¡Hola! Me gustaría ordenar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Quisiera solicitar comida para llevar', 'order.request');
  manager.add('es', '¡Hola! Necesito hacer un pedido para llevar', 'order.request');
  manager.add('es', '¡Hola! Me gustaría comprar algo a domicilio', 'order.request');
  manager.add('es', '¡Hola! Quiero solicitar algo para delivery', 'order.request');
  manager.add('es', '¡Hola! Necesito ordenar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Me gustaría hacer un pedido para llevar', 'order.request');
  manager.add('es', '¡Hola! Quisiera comprar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Necesito solicitar algo para delivery', 'order.request');
  manager.add('es', '¡Hola! Me gustaría ordenar algo a domicilio', 'order.request');
  manager.add('es', '¡Hola! Quiero hacer un pedido a domicilio', 'order.request');
  manager.add('es', '¡Hola! Necesito comprar algo para llevar', 'order.request');
  manager.add('es', '¡Hola! Me gustaría solicitar comida para llevar', 'order.request');
  manager.add('es', '¡Hola! Quisiera ordenar algo para delivery', 'order.request');
  manager.add('es', '¡Hola! Necesito hacer un pedido para delivery', 'order.request');
  manager.add('es', '¡Hola! Me gustaría ordenar comida para llevar', 'order.request');
  manager.add('es', '¡Hola! Quiero solicitar algo a domicilio', 'order.request');
  manager.add('es', '¡Hola! Necesito solicitar comida para delivery', 'order.request');
  manager.add('es', '¡Hola! Me gustaría comprar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Quisiera hacer un pedido para llevar', 'order.request');
  manager.add('es', '¡Hola! Necesito ordenar algo para delivery', 'order.request');
  manager.add('es', '¡Hola! Me gustaría solicitar algo para llevar', 'order.request');
  manager.add('es', '¡Hola! Quiero ordenar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Necesito hacer un pedido a domicilio', 'order.request');
  manager.add('es', '¡Hola! Quisiera solicitar algo para delivery', 'order.request');
  manager.add('es', '¡Hola! Me gustaría ordenar algo a domicilio', 'order.request');
  manager.add('es', '¡Hola! Necesito comprar algo para llevar', 'order.request');
  manager.add('es', '¡Hola! Quiero solicitar comida para delivery', 'order.request');
  manager.add('es', '¡Hola! Me gustaría ordenar algo para llevar', 'order.request');
  manager.add('es', '¡Hola! Quisiera solicitar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Necesito hacer un pedido para llevar', 'order.request');
  manager.add('es', '¡Hola! Me gustaría comprar algo a domicilio', 'order.request');
  manager.add('es', '¡Hola! Quiero hacer un pedido a domicilio', 'order.request');
  manager.add('es', '¡Hola! Necesito solicitar algo para delivery', 'order.request');
  manager.add('es', '¡Hola! Me gustaría ordenar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Quisiera hacer un pedido para delivery', 'order.request');
  manager.add('es', '¡Hola! Necesito comprar comida para llevar', 'order.request');
  manager.add('es', '¡Hola! Me gustaría solicitar comida para llevar', 'order.request');
  manager.add('es', '¡Hola! Quiero ordenar algo a domicilio', 'order.request');
  manager.add('es', '¡Hola! Necesito ordenar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Me gustaría hacer un pedido para llevar', 'order.request');
  manager.add('es', '¡Hola! Quisiera comprar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Necesito solicitar algo para llevar', 'order.request');
  manager.add('es', '¡Hola! Me gustaría ordenar comida para llevar', 'order.request');
  manager.add('es', '¡Hola! Quiero solicitar algo a domicilio', 'order.request');
  manager.add('es', '¡Hola! Necesito hacer un pedido para delivery', 'order.request');
  manager.add('es', '¡Hola! Me gustaría solicitar algo para llevar', 'order.request');
  manager.add('es', '¡Hola! Quisiera ordenar algo para delivery', 'order.request');
  manager.add('es', '¡Hola! Necesito hacer un pedido a domicilio', 'order.request');
  manager.add('es', '¡Hola! Me gustaría comprar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Quiero ordenar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Necesito solicitar comida para delivery', 'order.request');
  manager.add('es', '¡Hola! Me gustaría hacer un pedido para llevar', 'order.request');
  manager.add('es', '¡Hola! Quisiera solicitar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Necesito ordenar algo para delivery', 'order.request');
  manager.add('es', '¡Hola! Me gustaría ordenar algo para llevar', 'order.request');
  manager.add('es', '! Quiero solicitar comida para delivery', 'order.request');
  manager.add('es', '¡Hola! Necesito hacer un pedido para llevar', 'order.request');
  manager.add('es', '¡Hola! Me gustaría ordenar comida para llevar', 'order.request');
  manager.add('es', '¡Hola! Quisiera solicitar algo a domicilio', 'order.request');
  manager.add('es', '¡Hola! Necesito hacer un pedido para delivery', 'order.request');
  manager.add('es', '¡Hola! Me gustaría solicitar algo para llevar', 'order.request');
  manager.add('es', '¡Hola! Quisiera ordenar algo para delivery', 'order.request');
  manager.add('es', '¡Hola! Necesito hacer un pedido a domicilio', 'order.request');
  manager.add('es', '¡Hola! Me gustaría comprar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Quiero ordenar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Necesito solicitar algo para llevar', 'order.request');
  manager.add('es', '¡Hola! Me gustaría ordenar comida para llevar', 'order.request');
  manager.add('es', '¡Hola! Quiero solicitar algo a domicilio', 'order.request');
  manager.add('es', '¡Hola! Necesito hacer un pedido para delivery', 'order.request');
  manager.add('es', '¡Hola! Me gustaría solicitar algo para llevar', 'order.request');
  manager.add('es', '¡Hola! Quisiera ordenar algo para delivery', 'order.request');
  manager.add('es', '¡Hola! Necesito hacer un pedido a domicilio', 'order.request');
  manager.add('es', '¡Hola! Me gustaría comprar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Quiero ordenar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Necesito solicitar comida para delivery', 'order.request');
  manager.add('es', '¡Hola! Me gustaría hacer un pedido para llevar', 'order.request');
  manager.add('es', '¡Hola! Quisiera solicitar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Necesito ordenar algo para delivery', 'order.request');
  manager.add('es', '¡Hola! Me gustaría ordenar algo para llevar', 'order.request');
  manager.add('es', '¡Hola! Quisiera hacer un pedido para delivery', 'order.request');
  manager.add('es', '¡Hola! Necesito comprar comida para llevar', 'order.request');
  manager.add('es', '¡Hola! Me gustaría solicitar comida para llevar', 'order.request');
  manager.add('es', '¡Hola! Quiero ordenar algo a domicilio', 'order.request');
  manager.add('es', '¡Hola! Necesito ordenar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Me gustaría hacer un pedido para llevar', 'order.request');
  manager.add('es', '¡Hola! Quisiera comprar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Necesito solicitar algo para delivery', 'order.request');
  manager.add('es', '¡Hola! Me gustaría ordenar comida a domicilio', 'order.request');
  manager.add('es', '¡Hola! Quisiera hacer un pedido para delivery', 'order.request');
  manager.add('es', '¡Hola! Necesito comprar comida para llevar', 'order.request');


  const domainOrderMenuConfig = {
    language: 'es',
    domain: 'order.menu',
    intents: [{
      name: 'obtenerMenu',
      utterances: ['Obtener el menú', 'El menú'],
      parameters: []
    }, {
      name: 'obtenerMenuDia',
      utterances: ['Obtener el menú del día', 'El menú del día'],
      parameters: []
    }],
    parameters: {
      obtenerMenu: 'Obtener el menú',
      obtenerMenuDia: 'Obtener el menú del día'
    }
  };


  manager.assignDomain(domainOrderMenuConfig.language, domainOrderMenuConfig.domain, domainOrderMenuConfig);
  manager.add('es', 'qué opciones tienen en el menú?','order.menu.obtenerMenu');
  manager.add('es', 'cuál es el menú?', 'order.menu.obtenerMenu');
  manager.add('es', 'puedes mostrarme el menú?', 'order.menu.obtenerMenu');
  manager.add('es', 'cuáles son las opciones de comida?', 'order.menu.obtenerMenu');
  manager.add('es', 'dime las opciones del menú', 'order.menu.obtenerMenu');
  manager.add('es', '¡Hola! ¿Qué opciones tienen en el menú?', 'order.menu.obtenerMenu')
  manager.add('es', 'Me gustaría conocer el menú, por favor', 'order.menu.obtenerMenu')
  manager.add('es', '¿Cuál es el menú del día?', 'order.menu.obtenerMenu')
  manager.add('es', '¿Puedes mostrarme el menú actual?', 'order.menu.obtenerMenu')
  manager.add('es', 'Quisiera saber cuáles son las opciones de comida', 'order.menu.obtenerMenu')
  manager.add('es', 'Por favor, dime las opciones del menú', 'order.menu.obtenerMenu')
  manager.add('es', '¿Cuáles son las opciones de comida disponibles?', 'order.menu.obtenerMenu')
  manager.add('es', 'Me gustaría conocer las opciones del menú', 'order.menu.obtenerMenu')
  manager.add('es', '¿Hay algún menú especial para hoy?', 'order.menu.obtenerMenuDia')
  manager.add('es', 'Quisiera ver el menú antes de ordenar', 'order.menu.obtenerMenu')
  manager.add('es', '¿Puedes decirme qué platos están en el menú?', 'order.menu.obtenerMenu')
  manager.add('es', '¿Qué platos tienen disponibles en el menú?', 'order.menu.obtenerMenu')
  manager.add('es', 'Me gustaría conocer las opciones del menú de hoy', 'order.menu.obtenerMenuDia')
  manager.add('es', 'Por favor, dime qué platos puedo ordenar', 'order.menu.obtenerMenu')
  manager.add('es', '¿Cuáles son las opciones de comida para hoy?', 'order.menu.obtenerMenuDia')
  manager.add('es', 'Quisiera ver las opciones de comida antes de decidir', 'order.menu.obtenerMenu')
  manager.add('es', '¿Puedes decirme qué platos están disponibles?', 'order.menu.obtenerMenu')
  manager.add('es', '¿Qué platos tienen en el menú?', 'order.menu.obtenerMenu')
  manager.add('es', 'Me gustaría conocer el menú antes de hacer mi pedido', 'order.menu.obtenerMenu')
  manager.add('es', 'Quisiera ver las opciones de platos en el menú', 'order.menu.obtenerMenu')
  manager.add('es', '¿Qué opciones de platos tienen disponibles?', 'order.menu.obtenerMenu')
  manager.add('es', 'Me gustaría conocer las opciones de comida en el menú', 'order.menu.obtenerMenu')
  manager.add('es', '¿Cuáles son los platos disponibles en el menú?', 'order.menu.obtenerMenu')
  manager.add('es', 'Por favor, muéstrame las opciones del menú', 'order.menu.obtenerMenu')
  manager.add('es', '¿Qué platos puedo elegir del menú?', 'order.menu.obtenerMenu')
  manager.add('es', 'Quisiera conocer las opciones de platos disponibles', 'order.menu.obtenerMenu')
  manager.add('es', '¿Puedes decirme qué platos hay en el menú?', 'order.menu.obtenerMenu')
  manager.add('es', 'Me gustaría ver el menú antes de hacer mi pedido', 'order.menu.obtenerMenu')
  manager.add('es', '¿Qué opciones de comida tienen en el menú?', 'order.menu.obtenerMenu')
  manager.add('es', 'Por favor, muéstrame las opciones de platos', 'order.menu.obtenerMenu')
  manager.add('es', '¿Qué platos están disponibles en el menú?', 'order.menu.obtenerMenu')
  manager.add('es', 'Quisiera conocer las opciones de platos del día', 'order.menu.obtenerMenuDia')
  manager.add('es', '¿Puedes decirme qué platos hay disponibles?', 'order.menu.obtenerMenu')
  manager.add('es', 'Me gustaría ver las opciones de comida antes de ordenar', 'order.menu.obtenerMenu')
  manager.add('es', '¿Qué opciones de platos tienen para hoy?', 'order.menu.obtenerMenuDia')
  manager.add('es', 'Por favor, muéstrame el menú del día', 'order.menu.obtenerMenuDia')
  manager.add('es', '¿Qué platos tienen en el menú para hoy?', 'order.menu.obtenerMenuDia')
  manager.add('es', 'Quisiera conocer las opciones de platos del menú', 'order.menu.obtenerMenu')
  manager.add('es', '¿Cuál es el menú del día?', 'order.menu.obtenerMenuDia')
  manager.add('es', 'Quisiera ver las opciones de platos del menú del día', 'order.menu.obtenerMenuDia')
  manager.add('es', '¿Puedes decirme qué platos hay en el menú del día?', 'order.menu.obtenerMenuDia')
  manager.add('es', 'Me gustaría conocer las opciones de comida en el menú del día', 'order.menu.obtenerMenuDia')
  manager.add('es', 'Por favor, muéstrame el menú del día de hoy', 'order.menu.obtenerMenuDia')
  manager.add('es', '¿Qué opciones de platos tienen en el menú del día?', 'order.menu.obtenerMenuDia')
  manager.add('es', 'Quisiera ver las opciones de platos disponibles en el menú del día', 'order.menu.obtenerMenuDia')
  manager.add('es', '¿Cuáles son los platos del día disponibles en el menú?', 'order.menu.obtenerMenuDia')
  manager.add('es', 'Me gustaría ver el menú del día antes de hacer mi pedido', 'order.menu.obtenerMenuDia')
  manager.add('es', 'Por favor, muéstrame las opciones de platos del menú del día', 'order.menu.obtenerMenuDia')
  manager.add('es', '¿Qué platos tienen en el menú del día para hoy?', 'order.menu.obtenerMenuDia')
  manager.add('es', 'Quisiera conocer las opciones de platos del menú del día de hoy', 'order.menu.obtenerMenuDia')
  manager.add('es', '¿Puedes decirme qué platos hay disponibles en el menú del día?', 'order.menu.obtenerMenuDia')
  manager.add('es', 'Me gustaría ver las opciones de comida del menú del día antes de ordenar', 'order.menu.obtenerMenuDia')
  manager.add('es', '¿Qué opciones de platos tienen para hoy en el menú del día?', 'order.menu.obtenerMenuDia')
  manager.add('es', 'Por favor, muéstrame el menú del día de hoy', 'order.menu.obtenerMenuDia')
  manager.add('es', '¿Qué platos tienen en el menú del día para hoy?', 'order.menu.obtenerMenuDia')
  manager.add('es', 'Quisiera conocer las opciones de platos del menú del día', 'order.menu.obtenerMenuDia')
  manager.add('es', '¿Qué opciones de platos tienen disponibles en el menú para hoy?', 'order.menu.obtenerMenuDia')
  manager.add('es', 'Me gustaría ver las opciones de platos del menú para hoy', 'order.menu.obtenerMenuDia')
  manager.add('es', 'Por favor, muéstrame el menú disponible para hoy', 'order.menu.obtenerMenuDia')
  manager.add('es', '¿Cuál es la oferta del día en el menú?', 'order.menu.obtenerMenuDia')
  /*
  manager.add('es', 'Quisiera conocer las opciones de platos del menú disponible', 'order.menu')
  manager.add('es', '¿Puedes decirme qué platos están en el menú para hoy?', 'order.menu')
  manager.add('es', 'Me gustaría ver las opciones de comida disponibles en el menú para hoy', 'order.menu')
  manager.add('es', 'Por favor, muéstrame las opciones de platos del menú disponible para hoy', 'order.menu')
  manager.add('es', '¿Cuáles son los platos del día en el menú?', 'order.menu')
  manager.add('es', 'Quisiera ver el menú del día antes de hacer mi elección', 'order.menu')
  manager.add('es', '¿Qué platos están disponibles en el menú para hoy?', 'order.menu')
  manager.add('es', 'Me gustaría conocer las opciones de platos del menú para hoy', 'order.menu')
  manager.add('es', 'Por favor, muéstrame el menú disponible para hoy', 'order.menu')
  manager.add('es', '¿Qué platos tienen disponibles en el menú para hoy?', 'order.menu')
  manager.add('es', 'Quisiera conocer las opciones de platos del menú', 'order.menu')
  manager.add('es', '¿Podría ver el menú completo, por favor?', 'order.menu')
  manager.add('es', 'Me gustaría conocer todas las opciones de platos en el menú', 'order.menu')
  manager.add('es', '¿Cuál es la variedad de platos en el menú?', 'order.menu')
  manager.add('es', 'Quisiera revisar todas las opciones de comida en el menú', 'order.menu')
  manager.add('es', '¿Podrías mostrarme el menú detallado?', 'order.menu')
  manager.add('es', 'Me gustaría ver la lista completa de platos en el menú', 'order.menu')
  manager.add('es', '¿Cuál es el listado de platos disponibles en el menú?', 'order.menu')
  manager.add('es', 'Quisiera conocer todas las opciones de platos en el menú', 'order.menu')
  manager.add('es', '¿Podrías proporcionarme el menú completo con todas las opciones?', 'order.menu')
  manager.add('es', 'Me gustaría revisar todas las opciones de platos en el menú', 'order.menu')
  manager.add('es', '¿Cuál es el menú completo con todos los platos disponibles?', 'order.menu')
  manager.add('es', 'Quisiera ver todas las opciones de comida en el menú', 'order.menu')
  manager.add('es', '¿Podrías mostrarme el menú detallado con todas las opciones de platos?', 'order.menu')
  manager.add('es', 'Me gustaría conocer la lista completa de platos en el menú', 'order.menu')
  manager.add('es', '¿Qué platos tienen disponibles?', 'order.menu')
  manager.add('es', '¿Cuáles son las opciones de comida en el menú?', 'order.menu')
  manager.add('es', 'Dime las opciones de platos en el menú', 'order.menu')
  manager.add('es', 'Quisiera conocer los platos disponibles en el menú', 'order.menu')
  manager.add('es', '¿Podrías mostrarme las opciones de comida en el menú?', 'order.menu')
  manager.add('es', 'Me gustaría ver el listado de platos en el menú', 'order.menu')
  manager.add('es', '¿Cuál es el menú del día?', 'order.menu')
  manager.add('es', 'Quisiera saber qué platos tienen en el menú', 'order.menu')
  manager.add('es', '¿Podrías mostrarme el menú actualizado?', 'order.menu')
  manager.add('es', 'Me gustaría conocer las opciones de platos en el menú', 'order.menu')
  manager.add('es', '¿Cuáles son los platos disponibles en el menú?', 'order.menu')
  manager.add('es', 'Quisiera ver las opciones de comida en el menú', 'order.menu')
  manager.add('es', '¿Podrías mostrarme el menú con todas las opciones?', 'order.menu')
  manager.add('es', 'Me gustaría revisar las opciones de platos en el menú', 'order.menu')
  manager.add('es', '¿Qué opciones de comida tienen en el menú?', 'order.menu')
  manager.add('es', 'Me gustaría conocer las alternativas de platos en el menú', 'order.menu')
  manager.add('es', 'Quisiera ver las opciones de comida disponibles en el menú', 'order.menu')
  manager.add('es', '¿Podrías mostrarme el menú con todas las opciones de platos?', 'order.menu')
  manager.add('es', 'Me gustaría saber qué platos ofrecen en el menú', 'order.menu')
  manager.add('es', '¿Cuáles son las opciones de platos en el menú?', 'order.menu')
  manager.add('es', 'Quisiera conocer el listado completo de platos en el menú', 'order.menu')
  manager.add('es', '¿Podrías mostrarme las opciones de comida disponibles?', 'order.menu')
  manager.add('es', 'Me gustaría revisar el menú con todas las opciones de platos', 'order.menu')
  manager.add('es', '¿Cuál es el listado de platos en el menú?', 'order.menu')
  manager.add('es', 'Quisiera ver las alternativas de platos disponibles en el menú', 'order.menu')
  manager.add('es', '¿Podrías mostrarme el menú actualizado con todas las opciones?', 'order.menu')
  manager.add('es', 'Me gustaría conocer qué platos tienen disponibles en el menú', 'order.menu')
  manager.add('es', '¿Cuáles son las opciones de comida en el menú de hoy?', 'order.menu')
  manager.add('es', 'Quisiera saber qué platos tienen en el menú actual', 'order.menu')
  manager.add('es', '¿Podrías mostrarme las opciones de platos disponibles en el menú?', 'order.menu')
  manager.add('es', 'Me gustaría ver el menú con todas las opciones de comida', 'order.menu')
  manager.add('es', '¿Cuál es el listado completo de platos en el menú?', 'order.menu')
  manager.add('es', 'Quisiera conocer las opciones de platos en el menú de hoy', 'order.menu')
  manager.add('es', '¿Podrías mostrarme el menú actualizado con todas las opciones de platos?', 'order.menu')
  manager.add('es', 'Me gustaría saber qué platos ofrecen en el menú de hoy', 'order.menu')
  manager.add('es', '¿Cuáles son las opciones de platos disponibles en el menú?', 'order.menu')
  manager.add('es', 'Quisiera ver las alternativas de platos en el menú actual', 'order.menu')
  manager.add('es', '¿Podrías mostrarme el menú con todas las opciones de comida disponibles?', 'order.menu')
  manager.add('es', 'Me gustaría conocer qué platos tienen disponibles en el menú de hoy', 'order.menu')
  manager.add('es', '¿Cuál es el listado de platos en el menú actualizado?', 'order.menu')
  manager.add('es', 'Quisiera ver las opciones de platos disponibles en el menú de hoy', 'order.menu')
  manager.add('es', '¿Podrías mostrarme el menú actualizado con todas las opciones de platos disponibles?', 'order.menu')
  manager.add('es', '¿Cuáles son las opciones de platos en el menú de hoy?', 'order.menu')
  manager.add('es', 'Quisiera saber qué platos ofrecen en el menú del día', 'order.menu')
  manager.add('es', '¿Podrías mostrarme las opciones de comida disponibles en el menú de hoy?', 'order.menu')
  manager.add('es', 'Me gustaría ver el menú con todas las opciones de platos para hoy', 'order.menu')
  manager.add('es', '¿Cuál es el listado completo de platos en el menú de hoy?', 'order.menu')
  manager.add('es', 'Quisiera conocer las opciones de platos disponibles en el menú para hoy', 'order.menu')
  manager.add('es', '¿Podrías mostrarme el menú actualizado con todas las opciones de platos para hoy?', 'order.menu')
  manager.add('es', 'Me gustaría saber qué platos ofrecen en el menú del día de hoy', 'order.menu')
  manager.add('es', '¿Cuáles son las opciones de platos disponibles en el menú para hoy?', 'order.menu')
  manager.add('es', 'Quisiera ver las alternativas de platos en el menú actualizado para hoy', 'order.menu')
  manager.add('es', '¿Podrías mostrarme el menú con todas las opciones de comida disponibles para hoy?', 'order.menu')
  manager.add('es', 'Me gustaría conocer qué platos tienen disponibles en el menú del día de hoy', 'order.menu')
  manager.add('es', '¿Cuál es el listado de platos en el menú actualizado para hoy?', 'order.menu')
  manager.add('es', 'Quisiera ver las opciones de platos disponibles en el menú del día de hoy', 'order.menu')
  manager.add('es', '¿Podrías mostrarme el menú actualizado con todas las opciones de platos disponibles para hoy?', 'order.menu')
  manager.add('es', 'Me gustaría conocer qué platos tienen disponibles en el menú actualizado para hoy', 'order.menu')
  manager.add('es', '¿Cuáles son las opciones de platos en el menú de la semana?', 'order.menu')
  manager.add('es', 'Quisiera saber qué platos ofrecen en el menú semanal', 'order.menu')
  manager.add('es', '¿Podrías mostrarme las opciones de comida disponibles en el menú de la semana?', 'order.menu')
  manager.add('es', 'Me gustaría ver el menú con todas las opciones de platos para la semana', 'order.menu')
  manager.add('es', '¿Cuál es el listado completo de platos en el menú de la semana?', 'order.menu')
  manager.add('es', 'Quisiera conocer las opciones de platos disponibles en el menú para la semana', 'order.menu')
  manager.add('es', '¿Podrías mostrarme el menú actualizado con todas las opciones de platos para la semana?', 'order.menu')
  manager.add('es', 'Me gustaría saber qué platos ofrecen en el menú semanal', 'order.menu')
  manager.add('es', '¿Cuáles son las opciones de platos disponibles en el menú para la semana?', 'order.menu')
  manager.add('es', 'Me gustaría ver el menú del día con todas las opciones de platos', 'order.menu')
  manager.add('es', '¿Cuál es el menú actualizado para hoy?', 'order.menu')
  */
  const domainConfirmationConfig = {
    language: 'es',
    domain: 'order.confirmation',
    intents: [{
      name: 'confirmacionPedido',
      utterances: ['Confirmo mi pedido'],
      parameters: []
    }, {
      name: 'confirmacionPedidoMetodoPago',
      utterances: ['Confirmo mi pedido y solicito método de pago'],
      parameters: []
    }],
    parameters: {
      confirmacionPedido: 'Confirmo mi pedido',
      confirmacionPedidoMetodoPago: 'Confirmo mi pedido y solicito método de pago',
      metodoPago: '{metodoPago}'
    }
  };
  
  manager.assignDomain(domainConfirmationConfig.language, domainConfirmationConfig.domain, domainConfirmationConfig);
  manager.add('es', 'quiero confirmar mi pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'confirmo mi orden', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'sí, quiero hacer el pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'estoy seguro de mi pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'confirmo la compra', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'acepto el pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'quiero confirmar mi pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'confirmo mi orden', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'sí, quiero hacer el pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'estoy seguro de mi pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'confirmo la compra', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'acepto el pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'doy mi consentimiento para el pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'confirmo que quiero realizar la compra', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'estoy de acuerdo con el pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'confirmo que deseo proceder con el pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'acepto y confirmo el pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'confirmo y apruebo la orden', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'confirmo que quiero realizar la orden', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'sí, estoy listo para confirmar la compra', 'order.confirmation.confirmacionPedidoMetodoPago');
  manager.add('es', 'confirmo que deseo continuar con el pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'acepto los términos del pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'confirmo que he revisado mi pedido y quiero continuar', 'order.confirmation.confirmacionPedidoMetodoPago');
  manager.add('es', 'sí, estoy seguro de mi compra y quiero confirmarla', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'confirmo mi elección y procedo con la compra', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'doy mi aprobación para el pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'confirmo que quiero completar el pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'acepto y confirmo mi orden de compra', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'confirmo que quiero finalizar la compra', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'sí, quiero confirmar y pagar el pedido', 'order.confirmation.confirmacionPedidoMetodoPago');
  manager.add('es', 'confirmo mi selección y deseo proceder con la compra', 'order.confirmation.confirmacionPedidoMetodoPago');
  manager.add('es', 'acepto y apruebo el pedido realizado', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'confirmo que quiero continuar con el proceso de compra', 'order.confirmation.confirmacionPedidoMetodoPago');
  manager.add('es', 'sí, confirmo mi pedido y deseo finalizar la compra', 'order.confirmation.confirmacionPedidoMetodoPago');
  manager.add('es', 'confirmo que quiero confirmar mi pedido y realizar el pago', 'order.confirmation.confirmacionPedidoMetodoPago');
  manager.add('es', 'acepto y confirmo mi orden de compra con todos los detalles', 'order.confirmation.confirmacionPedidoMetodoPago');
  manager.add('es', 'Quiero confirmar mi pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Confirmo mi orden', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Sí, quiero hacer el pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Estoy seguro de mi pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Confirmo la compra', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Acepto el pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Deseo confirmar mi orden', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Confirmo que quiero realizar la compra', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Sí, deseo confirmar mi pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Aseguro mi pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Confirmo que quiero hacer la compra', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Estoy seguro de querer ordenar', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Acepto realizar el pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Confirmo el pedido solicitado', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Sí, quiero confirmar la orden', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Confirmo que deseo comprar', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Acepto el pedido solicitado', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Doy mi confirmación para la compra', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Sí, confirmo mi compra', 'order.confirmation.confirmacionPedidoMetodoPago');
  manager.add('es', 'Acepto el pedido solicitado', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Confirmo la orden de compra', 'order.confirmation.confirmacionPedidoMetodoPago');
  manager.add('es', 'Doy mi confirmación para el pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Estoy de acuerdo con el pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Acepto el pedido con los detalles proporcionados', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Confirmo mi orden', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Sí, quiero confirmar mi pedido', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Acepto la compra con los artículos seleccionados', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Confirmo el pedido que he realizado', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Sí, estoy seguro de mi compra', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Acepto el pedido y procedo a la compra', 'order.confirmation.confirmacionPedidoMetodoPago');
  manager.add('es', 'Confirmo la compra con los detalles proporcionados', 'order.confirmation.confirmacionPedido');
  manager.add('es', 'Sí, quiero proceder con la orden', 'order.confirmation.confirmacionPedidoMetodoPago');
  manager.add('es', 'Acepto realizar el pedido según lo solicitado', 'order.confirmation');
  /*
  manager.add('es', 'Confirmo el pedido y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Sí, estoy de acuerdo con el pedido y sus condiciones', 'order.confirmation');
  manager.add('es', 'Acepto el pedido y confirmo la dirección de entrega', 'order.confirmation');
  manager.add('es', 'Confirmo mi compra', 'order.confirmation');
  manager.add('es', 'Sí, acepto el pedido', 'order.confirmation');
  manager.add('es', 'Doy mi confirmación para el pedido solicitado', 'order.confirmation');
  manager.add('es', 'Confirmo la compra con los detalles proporcionados', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar y finalizar mi pedido', 'order.confirmation');
  manager.add('es', 'Acepto realizar la compra según lo solicitado', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido y procedo a pagar', 'order.confirmation');
  manager.add('es', 'Sí, estoy de acuerdo con el pedido y sus condiciones', 'order.confirmation');
  manager.add('es', 'Acepto el pedido y confirmo la dirección de entrega', 'order.confirmation');
  manager.add('es', 'Confirmo la orden y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar y finalizar la compra', 'order.confirmation');
  manager.add('es', 'Acepto el pedido y confirmo los detalles de compra', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido con los detalles proporcionados', 'order.confirmation');
  manager.add('es', 'Sí, estoy seguro de mi compra y confirmo mi orden', 'order.confirmation');
  manager.add('es', 'Acepto realizar el pedido y procedo a pagar', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido y acepto los términos de compra', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar y finalizar mi orden de compra', 'order.confirmation');
  manager.add('es', 'Acepto el pedido y doy mi autorización para el pago', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que realicé', 'order.confirmation');
  manager.add('es', 'Acepto la compra que realicé', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar mi pedido', 'order.confirmation');
  manager.add('es', 'Doy mi confirmación para el pedido que solicité', 'order.confirmation');
  manager.add('es', 'Confirmo la orden que hice', 'order.confirmation');
  manager.add('es', 'Sí, acepto el pedido que realicé', 'order.confirmation');
  manager.add('es', 'Doy mi aprobación para la compra que realicé', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que solicité y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Sí, estoy de acuerdo con el pedido que realicé y confirmo la compra', 'order.confirmation');
  manager.add('es', 'Acepto realizar la compra según lo solicitado y confirmo mi pedido', 'order.confirmation');
  manager.add('es', 'Confirmo la compra con los detalles proporcionados y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar y finalizar mi pedido de compra', 'order.confirmation');
  manager.add('es', 'Acepto el pedido que realicé y confirmo los detalles de compra', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que solicité con los detalles proporcionados', 'order.confirmation');
  manager.add('es', 'Sí, estoy seguro de mi compra y confirmo mi orden de pedido', 'order.confirmation');
  manager.add('es', 'Acepto realizar el pedido que solicité y procedo a pagar', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que realicé y acepto los términos de compra', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar y finalizar mi orden de compra', 'order.confirmation');
  manager.add('es', 'Acepto el pedido que solicité y doy mi autorización para el pago', 'order.confirmation');
  manager.add('es', 'Confirmo mi orden de compra', 'order.confirmation');
  manager.add('es', 'Acepto el pedido que hice', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar y finalizar mi compra', 'order.confirmation');
  manager.add('es', 'Doy mi confirmación para la orden de pedido', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que realicé y acepto los términos de compra', 'order.confirmation');
  manager.add('es', 'Acepto el pedido que solicité y doy mi autorización para el pago', 'order.confirmation');
  manager.add('es', 'Sí, estoy seguro de mi compra y confirmo mi orden de pedido', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que hice con los detalles proporcionados', 'order.confirmation');
  manager.add('es', 'Acepto realizar el pedido que solicité y procedo a pagar', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que realicé y confirmo la compra', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar y finalizar mi pedido de compra', 'order.confirmation');
  manager.add('es', 'Doy mi aprobación para la compra que realicé', 'order.confirmation');
  manager.add('es', 'Confirmo la compra con los detalles proporcionados y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Sí, estoy de acuerdo con el pedido que realicé y confirmo la compra', 'order.confirmation');
  manager.add('es', 'Acepto la compra que realicé y confirmo el pedido', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que solicité y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar mi pedido y proceder con el pago', 'order.confirmation');
  manager.add('es', 'Acepto el pedido que realicé y confirmo los detalles de compra', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que solicité con los detalles proporcionados', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar y finalizar mi orden de pedido', 'order.confirmation');
  manager.add('es', 'Confirmo mi pedido', 'order.confirmation');
  manager.add('es', 'Acepto la orden que hice', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar y finalizar mi compra', 'order.confirmation');
  manager.add('es', 'Doy mi confirmación para el pedido', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que realicé y acepto los términos de compra', 'order.confirmation');
  manager.add('es', 'Acepto el pedido que solicité y doy mi autorización para el pago', 'order.confirmation');
  manager.add('es', 'Sí, estoy seguro de mi compra y confirmo mi pedido de compra', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que hice con los detalles proporcionados', 'order.confirmation');
  manager.add('es', 'Acepto realizar el pedido que solicité y procedo a pagar', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que realicé y confirmo la compra', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar y finalizar mi pedido de compra', 'order.confirmation');
  manager.add('es', 'Doy mi aprobación para la compra que realicé', 'order.confirmation');
  manager.add('es', 'Confirmo la compra con los detalles proporcionados y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Sí, estoy de acuerdo con el pedido que realicé y confirmo la compra', 'order.confirmation');
  manager.add('es', 'Acepto la compra que realicé y confirmo el pedido', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que solicité y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar mi pedido y proceder con el pago', 'order.confirmation');
  manager.add('es', 'Acepto el pedido que realicé y confirmo los detalles de compra', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que solicité con los detalles proporcionados', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar y finalizar mi orden de pedido', 'order.confirmation');
  manager.add('es', 'Sí, confirmo mi pedido', 'order.confirmation');
  manager.add('es', 'Acepto la orden que realicé', 'order.confirmation');
  manager.add('es', 'Confirmo mi compra', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar mi pedido y proceder con el pago', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que hice y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Acepto realizar el pedido y confirmo la compra', 'order.confirmation');
  manager.add('es', 'Sí, estoy de acuerdo con el pedido que realicé', 'order.confirmation');
  manager.add('es', 'Doy mi confirmación para el pedido y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que solicité y acepto los términos de compra', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar y finalizar mi compra', 'order.confirmation');
  manager.add('es', 'Acepto el pedido que solicité y confirmo los detalles de compra', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que hice y confirmo la compra', 'order.confirmation');
  manager.add('es', 'Sí, estoy seguro de mi compra y confirmo mi pedido', 'order.confirmation');
  manager.add('es', 'Acepto la compra que realicé y confirmo el pedido', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que solicité y procedo a pagar', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar y finalizar mi pedido de compra', 'order.confirmation');
  manager.add('es', 'Doy mi aprobación para la compra que realicé', 'order.confirmation');
  manager.add('es', 'Confirmo la compra con los detalles proporcionados y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Sí, estoy de acuerdo con el pedido que realicé y confirmo la compra', 'order.confirmation');
  manager.add('es', 'Acepto realizar el pedido que solicité y proceder con el pago', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que hice con los detalles proporcionados', 'order.confirmation');
  manager.add('es', 'Sí, confirmo mi pedido', 'order.confirmation');
  manager.add('es', 'Acepto la orden que realicé', 'order.confirmation');
  manager.add('es', 'Confirmo mi compra', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar mi pedido y proceder con el pago', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que hice y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Acepto realizar el pedido y confirmo la compra', 'order.confirmation');
  manager.add('es', 'Sí, estoy de acuerdo con el pedido que realicé', 'order.confirmation');
  manager.add('es', 'Doy mi confirmación para el pedido y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que solicité y acepto los términos de compra', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar y finalizar mi compra', 'order.confirmation');
  manager.add('es', 'Acepto el pedido que solicité y confirmo los detalles de compra', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que hice y confirmo la compra', 'order.confirmation');
  manager.add('es', 'Sí, estoy seguro de mi compra y confirmo mi pedido', 'order.confirmation');
  manager.add('es', 'Acepto la compra que realicé y confirmo el pedido', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que solicité y procedo a pagar', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar y finalizar mi pedido de compra', 'order.confirmation');
  manager.add('es', 'Doy mi aprobación para la compra que realicé', 'order.confirmation');
  manager.add('es', 'Confirmo la compra con los detalles proporcionados y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Sí, estoy de acuerdo con el pedido que realicé y confirmo la compra', 'order.confirmation');
  manager.add('es', 'Acepto realizar el pedido que solicité y proceder con el pago', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que hice con los detalles proporcionados', 'order.confirmation');
  manager.add('es', 'Sí, confirmo mi pedido', 'order.confirmation');
  manager.add('es', 'Estoy de acuerdo con mi orden', 'order.confirmation');
  manager.add('es', 'Acepto el pedido que realicé', 'order.confirmation');
  manager.add('es', 'Confirmo mi compra', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar mi pedido y proceder con el pago', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que hice y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Acepto realizar el pedido y confirmo la compra', 'order.confirmation');
  manager.add('es', 'Sí, estoy de acuerdo con el pedido que realicé', 'order.confirmation');
  manager.add('es', 'Doy mi confirmación para el pedido y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que solicité y acepto los términos de compra', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar y finalizar mi compra', 'order.confirmation');
  manager.add('es', 'Acepto el pedido que solicité y confirmo los detalles de compra', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que hice y confirmo la compra', 'order.confirmation');
  manager.add('es', 'Sí, estoy seguro de mi compra y confirmo mi pedido', 'order.confirmation');
  manager.add('es', 'Acepto la compra que realicé y confirmo el pedido', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que solicité y procedo a pagar', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar y finalizar mi pedido de compra', 'order.confirmation');
  manager.add('es', 'Doy mi aprobación para la compra que realicé', 'order.confirmation');
  manager.add('es', 'Confirmo la compra con los detalles proporcionados y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Sí, estoy de acuerdo con el pedido que realicé y confirmo la compra', 'order.confirmation');
  manager.add('es', 'Acepto realizar el pedido que solicité y proceder con el pago', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que hice con los detalles proporcionados', 'order.confirmation');
  manager.add('es', 'Sí, confirmo mi pedido', 'order.confirmation');
  manager.add('es', 'Estoy seguro de mi orden', 'order.confirmation');
  manager.add('es', 'Acepto el pedido que realicé', 'order.confirmation');
  manager.add('es', 'Confirmo mi compra', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar mi pedido y proceder con el pago', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que hice y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Acepto realizar el pedido y confirmo la compra', 'order.confirmation');
  manager.add('es', 'Sí, estoy de acuerdo con el pedido que realicé', 'order.confirmation');
  manager.add('es', 'Doy mi confirmación para el pedido y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que solicité y acepto los términos de compra', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar y finalizar mi compra', 'order.confirmation');
  manager.add('es', 'Acepto el pedido que solicité y confirmo los detalles de compra', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que hice y confirmo la compra', 'order.confirmation');
  manager.add('es', 'Sí, estoy seguro de mi compra y confirmo mi pedido', 'order.confirmation');
  manager.add('es', 'Acepto la compra que realicé y confirmo el pedido', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que solicité y procedo a pagar', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar y finalizar mi pedido de compra', 'order.confirmation');
  manager.add('es', 'Doy mi aprobación para la compra que realicé', 'order.confirmation');
  manager.add('es', 'Confirmo la compra con los detalles proporcionados y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Sí, estoy de acuerdo con el pedido que realicé y confirmo la compra', 'order.confirmation');
  manager.add('es', 'Acepto realizar el pedido que solicité y proceder con el pago', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que hice con los detalles proporcionados', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar mi pedido', 'order.confirmation');
  manager.add('es', 'Confirmo mi compra', 'order.confirmation');
  manager.add('es', 'Acepto el pedido', 'order.confirmation');
  manager.add('es', 'Estoy de acuerdo con mi orden', 'order.confirmation');
  manager.add('es', 'Sí, confirmo la compra', 'order.confirmation');
  manager.add('es', 'Acepto el pedido y procedo con el pago', 'order.confirmation');
  manager.add('es', 'Confirmo mi orden y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar mi compra y finalizar el pedido', 'order.confirmation');
  manager.add('es', 'Acepto realizar el pedido y confirmar la compra', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido y acepto los términos de compra', 'order.confirmation');
  manager.add('es', 'Sí, estoy de acuerdo con el pedido y confirmo la compra', 'order.confirmation');
  manager.add('es', 'Acepto el pedido que realicé y confirmo los detalles de compra', 'order.confirmation');
  manager.add('es', 'Confirmo mi pedido y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Sí, estoy seguro de mi compra y confirmo el pedido', 'order.confirmation');
  manager.add('es', 'Acepto la compra que realicé y confirmo mi pedido', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido que solicité y procedo a realizar el pago', 'order.confirmation');
  manager.add('es', 'Sí, quiero confirmar y finalizar mi pedido', 'order.confirmation');
  manager.add('es', 'Doy mi aprobación para la compra y confirmo el pedido', 'order.confirmation');
  manager.add('es', 'Confirmo la compra con los detalles proporcionados y autorizo el pago', 'order.confirmation');
  manager.add('es', 'Sí, estoy de acuerdo con el pedido que realicé y confirmo la compra', 'order.confirmation');
  manager.add('es', 'Acepto realizar el pedido que solicité y proceder con el pago', 'order.confirmation');
  manager.add('es', 'Confirmo el pedido con los detalles proporcionados', 'order.confirmation');
  */

  const domainCancelationConfig = {
    language: 'es',
    domain: 'order.cancelation',
    intents: [{
      name: 'cancelacionPedido',
      utterances: ['Cancelar mi pedido'],
      parameters: []
    }, {
      name: 'cancelacionPedidoReembolso',
      utterances: ['Confirmo mi pedido y solicito método de pago'],
      parameters: []
    }],
    parameters: {
      cancelacionPedido: 'Confirmo mi pedido',
      cancelacionPedidoReembolso: 'Confirmo mi pedido y solicito método de pago',
    }
  };
  manager.assignDomain('es', 'order.cancelation', domainCancelationConfig);
  manager.add('es', 'quiero cancelar mi pedido', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'cancelo mi orden', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'no quiero hacer el pedido', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'deseo cancelar la compra', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'anulo mi pedido', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'no acepto el pedido', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'Quiero cancelar mi pedido', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'Cancelar mi compra', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'Deseo cancelar mi orden', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'Cancelar mi pedido', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'Quiero cancelar mi compra y obtener un reembolso', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'Cancelar mi pedido y solicitar un reembolso', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'Deseo cancelar mi pedido y recibir un reembolso completo', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'Cancelar mi compra y obtener un reembolso completo', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'Quiero cancelar mi pedido y recibir un reembolso', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'Deseo anular mi pedido', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'Cancelar mi orden', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'Quiero anular mi compra', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'Deseo cancelar mi pedido y obtener un reembolso', 'order.cancelation.cancelacionPedidoReembolso');
  manager.add('es', 'Cancelar mi compra y recibir un reembolso completo', 'order.cancelation.cancelacionPedidoReembolso');
  manager.add('es', 'Necesito cancelar mi pedido y solicitar un reembolso','order.cancelation.cancelacionPedidoReembolso');
  manager.add('es', 'Quiero cancelar mi orden y recibir un reembolso', 'order.cancelation.cancelacionPedidoReembolso');
  manager.add('es', 'Deseo anular mi pedido y obtener un reembolso completo', 'order.cancelation.cancelacionPedidoReembolso');
  manager.add('es', 'Cancelar mi compra y obtener un reembolso', 'order.cancelation.cancelacionPedidoReembolso');
  manager.add('es', 'Necesito cancelar mi pedido y recibir un reembolso completo', 'order.cancelation.cancelacionPedidoReembolso');
  manager.add('es', 'Quiero cancelar mi pedido y solicitar un reembolso completo', 'order.cancelation.cancelacionPedidoReembolso');
  manager.add('es', 'Deseo anular mi pedido y recibir un reembolso', 'order.cancelation.cancelacionPedidoReembolso');
  manager.add('es', 'Cancelar mi compra y solicitar un reembolso', 'order.cancelation.cancelacionPedidoReembolso');
  manager.add('es', 'Necesito cancelar mi pedido y obtener un reembolso completo', 'order.cancelation.cancelacionPedidoReembolso');
  manager.add('es', 'Quiero anular mi pedido y obtener un reembolso','order.cancelation.cancelacionPedidoReembolso');
  manager.add('es', 'Deseo cancelar mi compra y solicitar un reembolso completo','order.cancelation.cancelacionPedidoReembolso');
  manager.add('es', 'Cancelar mi pedido y recibir un reembolso', 'order.cancelation.cancelacionPedidoReembolso');
  manager.add('es', 'Necesito anular mi pedido y recibir un reembolso completo', 'order.cancelation.cancelacionPedidoReembolso');
  manager.add('es', 'Quiero cancelar mi pedido', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'Cancelar mi compra', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'Deseo cancelar mi orden', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'Cancelar mi pedido', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'Quiero cancelar mi compra y obtener un reembolso', 'order.cancelation.cancelacionPedidoReembolso');
  manager.add('es', 'Cancelar mi pedido y solicitar un reembolso', 'order.cancelation.cancelacionPedidoReembolso');
  manager.add('es', 'Deseo cancelar mi pedido y recibir un reembolso completo', 'order.cancelation.cancelacionPedidoReembolso');
  manager.add('es', 'Cancelar mi compra y obtener un reembolso completo', 'order.cancelation.cancelacionPedidoReembolso');
  manager.add('es', 'Quiero cancelar mi pedido y recibir un reembolso', 'order.cancelation.cancelacionPedidoReembolso');
  manager.add('es', 'Necesito cancelar mi orden', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'Deseo anular mi pedido', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'Cancelar mi orden', 'order.cancelation.cancelacionPedido');
  manager.add('es', 'Quiero anular mi compra', 'order.cancelation.cancelacionPedido');
  /*
  manager.add('es', 'Deseo cancelar mi pedido y obtener un reembolso', 'order.cancelation');
  manager.add('es', 'Cancelar mi compra y recibir un reembolso completo', 'order.cancelation');
  manager.add('es', 'Necesito cancelar mi pedido y solicitar un reembolso', 'order.cancelation');
  manager.add('es', 'Quiero cancelar mi orden y recibir un reembolso', 'order.cancelation');
  manager.add('es', 'Deseo anular mi pedido y obtener un reembolso completo', 'order.cancelation');
  manager.add('es', 'Cancelar mi compra y obtener un reembolso', 'order.cancelation');
  manager.add('es', 'Necesito cancelar mi pedido y recibir un reembolso completo', 'order.cancelation');
  manager.add('es', 'Quiero cancelar mi pedido y solicitar un reembolso completo', 'order.cancelation');
  manager.add('es', 'Deseo anular mi pedido y recibir un reembolso', 'order.cancelation');
  manager.add('es', 'Cancelar mi compra y solicitar un reembolso', 'order.cancelation');
  manager.add('es', 'Necesito cancelar mi pedido y obtener un reembolso completo', 'order.cancelation');
  manager.add('es', 'Quiero anular mi pedido y obtener un reembolso', 'order.cancelation');
  manager.add('es', 'Deseo cancelar mi compra y solicitar un reembolso completo', 'order.cancelation');
  manager.add('es', 'Cancelar mi pedido y recibir un reembolso', 'order.cancelation');
  manager.add('es', 'Necesito anular mi pedido y recibir un reembolso completo', 'order.cancelation');
  manager.add('es', 'Quiero cancelar mi pedido', 'order.cancelation');
  manager.add('es', 'Cancelar mi compra', 'order.cancelation');
  manager.add('es', 'Deseo cancelar mi orden', 'order.cancelation');
  manager.add('es', 'Cancelar mi pedido', 'order.cancelation');
  manager.add('es', 'Quiero cancelar mi compra y obtener un reembolso', 'order.cancelation');
  manager.add('es', 'Cancelar mi pedido y solicitar un reembolso', 'order.cancelation');
  manager.add('es', 'Deseo cancelar mi pedido y recibir un reembolso completo', 'order.cancelation');
  manager.add('es', 'Cancelar mi compra y obtener un reembolso completo', 'order.cancelation');
  manager.add('es', 'Quiero cancelar mi pedido y recibir un reembolso', 'order.cancelation');
  manager.add('es', 'Necesito cancelar mi orden', 'order.cancelation');
  manager.add('es', 'Deseo anular mi pedido', 'order.cancelation');
  manager.add('es', 'Cancelar mi orden', 'order.cancelation');
  manager.add('es', 'Quiero anular mi compra', 'order.cancelation');
  manager.add('es', 'Deseo cancelar mi pedido y obtener un reembolso', 'order.cancelation');
  manager.add('es', 'Cancelar mi compra y recibir un reembolso completo', 'order.cancelation');
  manager.add('es', 'Necesito cancelar mi pedido y solicitar un reembolso', 'order.cancelation');
  manager.add('es', 'Quiero cancelar mi orden y recibir un reembolso', 'order.cancelation');
  manager.add('es', 'Deseo anular mi pedido y obtener un reembolso completo', 'order.cancelation');
  manager.add('es', 'Cancelar mi compra y obtener un reembolso', 'order.cancelation');
  manager.add('es', 'Necesito cancelar mi pedido y recibir un reembolso completo', 'order.cancelation');
  manager.add('es', 'Quiero cancelar mi pedido y solicitar un reembolso completo', 'order.cancelation');
  manager.add('es', 'Deseo anular mi pedido y recibir un reembolso', 'order.cancelation');
  manager.add('es', 'Cancelar mi compra y solicitar un reembolso', 'order.cancelation');
  manager.add('es', 'Necesito cancelar mi pedido y obtener un reembolso completo', 'order.cancelation');
  manager.add('es', 'Quiero anular mi pedido y obtener un reembolso', 'order.cancelation');
  manager.add('es', 'Deseo cancelar mi compra y solicitar un reembolso completo', 'order.cancelation');
  manager.add('es', 'Cancelar mi pedido y recibir un reembolso', 'order.cancelation');
  manager.add('es', 'Necesito anular mi pedido y recibir un reembolso completo', 'order.cancelation');
  manager.add('es', 'Quiero cancelar mi pedido', 'order.cancelation');
  manager.add('es', 'Cancelar mi compra', 'order.cancelation');
  manager.add('es', 'Deseo cancelar mi orden', 'order.cancelation');
  manager.add('es', 'Cancelar mi pedido', 'order.cancelation');
  manager.add('es', 'Quiero cancelar mi compra y obtener un reembolso', 'order.cancelation');
  manager.add('es', 'Cancelar mi pedido y solicitar un reembolso', 'order.cancelation');
  manager.add('es', 'Deseo cancelar mi pedido y recibir un reembolso completo', 'order.cancelation');
  manager.add('es', 'Cancelar mi compra y obtener un reembolso completo', 'order.cancelation');
  manager.add('es', 'Quiero cancelar mi pedido y recibir un reembolso', 'order.cancelation');
  manager.add('es', 'Necesito cancelar mi orden', 'order.cancelation');
  manager.add('es', 'Deseo anular mi pedido', 'order.cancelation');
  manager.add('es', 'Cancelar mi orden', 'order.cancelation');
  manager.add('es', 'Quiero anular mi compra', 'order.cancelation');
  manager.add('es', 'Deseo cancelar mi pedido y obtener un reembolso', 'order.cancelation');
  manager.add('es', 'Cancelar mi compra y recibir un reembolso completo', 'order.cancelation');
  manager.add('es', 'Necesito cancelar mi pedido y solicitar un reembolso', 'order.cancelation');
  manager.add('es', 'Quiero cancelar mi orden y recibir un reembolso', 'order.cancelation');
  manager.add('es', 'Deseo anular mi pedido y obtener un reembolso completo', 'order.cancelation');
  manager.add('es', 'Cancelar mi compra y obtener un reembolso', 'order.cancelation');
  manager.add('es', 'Necesito cancelar mi pedido y recibir un reembolso completo', 'order.cancelation');
  manager.add('es', 'Quiero cancelar mi pedido y solicitar un reembolso completo', 'order.cancelation');
  manager.add('es', 'Deseo anular mi pedido y recibir un reembolso', 'order.cancelation');
  manager.add('es', 'Cancelar mi compra y solicitar un reembolso', 'order.cancelation');
  manager.add('es', 'Necesito cancelar mi pedido y obtener un reembolso completo', 'order.cancelation');
  manager.add('es', 'Quiero anular mi pedido y obtener un reembolso', 'order.cancelation');
  manager.add('es', 'Deseo cancelar mi compra y solicitar un reembolso completo', 'order.cancelation');
  manager.add('es', 'Cancelar mi pedido y recibir un reembolso', 'order.cancelation');
  manager.add('es', 'Necesito anular mi pedido y recibir un reembolso completo', 'order.cancelation');
  manager.add('es', 'Quiero cancelar mi pedido', 'order.cancelation');
  manager.add('es', 'Cancelar mi compra', 'order.cancelation');
  manager.add('es', 'Deseo cancelar mi orden', 'order.cancelation');
  manager.add('es', 'Cancelar mi pedido', 'order.cancelation');
  manager.add('es', 'Quiero cancelar mi compra y obtener un reembolso', 'order.cancelation');
  manager.add('es', 'Cancelar mi pedido y solicitar un reembolso', 'order.cancelation');
  manager.add('es', 'Deseo cancelar mi pedido y recibir un reembolso completo', 'order.cancelation');
  manager.add('es', 'Cancelar mi compra y obtener un reembolso completo', 'order.cancelation');
  manager.add('es', 'Quiero cancelar mi pedido y recibir un reembolso', 'order.cancelation');
  manager.add('es', 'Necesito cancelar mi orden', 'order.cancelation');
  manager.add('es', 'Deseo anular mi pedido', 'order.cancelation');
  manager.add('es', 'Cancelar mi orden', 'order.cancelation');
  manager.add('es', 'Quiero anular mi compra', 'order.cancelation');
  manager.add('es', 'Deseo cancelar mi pedido y obtener un reembolso', 'order.cancelation');
  manager.add('es', 'Cancelar mi compra y recibir un reembolso completo', 'order.cancelation');
  manager.add('es', 'Necesito cancelar mi pedido y solicitar un reembolso', 'order.cancelation');
  manager.add('es', 'Quiero cancelar mi orden y recibir un reembolso', 'order.cancelation');
  manager.add('es', 'Deseo anular mi pedido y obtener un reembolso completo', 'order.cancelation');
  manager.add('es', 'Cancelar mi compra y obtener un reembolso', 'order.cancelation');
  manager.add('es', 'Necesito cancelar mi pedido y recibir un reembolso completo', 'order.cancelation');
  manager.add('es', 'Quiero cancelar mi pedido y solicitar un reembolso completo', 'order.cancelation');
  manager.add('es', 'Deseo anular mi pedido y recibir un reembolso', 'order.cancelation');
  manager.add('es', 'Cancelar mi compra y solicitar un reembolso', 'order.cancelation');
  manager.add('es', 'Necesito cancelar mi pedido y obtener un reembolso completo', 'order.cancelation');
  manager.add('es', 'Quiero anular mi pedido y obtener un reembolso', 'order.cancelation');
  manager.add('es', 'Deseo cancelar mi compra y solicitar un reembolso completo', 'order.cancelation');
  manager.add('es', 'Cancelar mi pedido y recibir un reembolso', 'order.cancelation');
  manager.add('es', 'Necesito anular mi pedido y recibir un reembolso completo', 'order.cancelation');
  manager.add('es', 'Quiero cancelar mi pedido', 'order.cancelation');
  manager.add('es', 'Cancelar mi compra', 'order.cancelation');
  manager.add('es', 'Deseo cancelar mi orden', 'order.cancelation');
  manager.add('es', 'Cancelar mi pedido', 'order.cancelation');
  manager.add('es', 'Quiero cancelar mi compra y obtener un reembolso', 'order.cancelation');
  manager.add('es', 'Cancelar mi pedido y solicitar un reembolso', 'order.cancelation');
  manager.add('es', 'Deseo cancelar mi pedido y recibir un reembolso completo', 'order.cancelation');
  manager.add('es', 'Cancelar mi compra y obtener un reembolso completo', 'order.cancelation');
  manager.add('es', 'Quiero cancelar mi pedido y recibir un reembolso', 'order.cancelation');
  manager.add('es', 'I want to cancel my order', 'order.cancelation');
  manager.add('es', 'Cancel my purchase', 'order.cancelation');
  manager.add('es', 'I wish to cancel my order', 'order.cancelation');
  manager.add('es', 'Cancel my order', 'order.cancelation');
  manager.add('es', 'I want to cancel my purchase and get a refund', 'order.cancelation');
  manager.add('es', 'Cancel my order and request a refund', 'order.cancelation');
  manager.add('es', 'I want to cancel my order and receive a full refund', 'order.cancelation');
  manager.add('es', 'Cancel my purchase and get a full refund', 'order.cancelation');
  manager.add('es', 'Quiero cancelar mi pedido', 'order.cancelation');
  manager.add('es', 'Cancelar mi compra', 'order.cancelation');
  manager.add('es', 'Deseo anular mi pedido', 'order.cancelation');
  manager.add('es', 'Cancelar mi orden de compra', 'order.cancelation');
  manager.add('es', 'No quiero seguir con mi compra, cancelar pedido', 'order.cancelation');
  manager.add('es', 'Anular mi compra y solicitar reembolso', 'order.cancelation');
  manager.add('es', 'Quiero cancelar el pedido y obtener un reembolso', 'order.cancelation');
  manager.add('es', 'Cancelar la compra y solicitar la devolución del dinero', 'order.cancelation');
  manager.add('es', 'Anular el pedido y obtener un reembolso', 'order.cancelation');
  manager.add('es', 'Deseo cancelar el pedido y recibir un reembolso completo', 'order.cancelation');
  manager.add('es', 'No quiero seguir con la compra y solicitar la cancelación del pedido', 'order.cancelation');
  manager.add('es', 'Quiero anular la compra y recibir un reembolso por completo', 'order.cancelation');
  manager.add('es', 'Cancelar el pedido que realicé y solicitar la devolución del dinero', 'order.cancelation');
  manager.add('es', 'Anular la compra y obtener un reembolso completo por el pedido', 'order.cancelation');
  manager.add('es', 'Deseo cancelar mi pedido y recibir el importe total de la compra', 'order.cancelation');
  manager.add('es', 'No quiero continuar con la compra, anular pedido y solicitar reembolso', 'order.cancelation');
  manager.add('es', 'Cancelar el pedido y solicitar el reembolso de la compra', 'order.cancelation');
  manager.add('es', 'Anular mi pedido y recibir el reembolso completo del importe de compra', 'order.cancelation');
  manager.add('es', 'Deseo cancelar la compra y recibir un reembolso por el pedido completo', 'order.cancelation');
  manager.add('es', 'No quiero seguir con la compra, anular el pedido y solicitar el reembolso total', 'order.cancelation');
  manager.add('es', 'Cancelar la compra y obtener el reembolso completo del pedido', 'order.cancelation');
  manager.add('es', 'Anular el pedido y recibir el reembolso total del importe de compra', 'order.cancelation');
  manager.add('es', 'Deseo cancelar mi compra y obtener un reembolso completo del pedido', 'order.cancelation');
  */
  const domainPaymentConfig = {
    language: 'es',
    domain: 'order.payment',
    intents: [
      {
        name: 'preguntaMetodoPago',
        utterances: ['{preguntaMetodoPago}']
      },
      {
        name: 'confirmacionMetodoPago',
        utterances: ['{confirmacionMetodoPago}']
      },
      {
        name: 'confirmacionPedido',
        utterances: ['{confirmacionPedido}']
      },
      {
        name: 'metodosPagoValidos',
        utterances: ['{metodosPagoValidos}']
      },
      {
        name: 'tipoTarjeta',
        utterances: ['{tipoTarjeta}']
      }
    ],
    parameters: {
      preguntaMetodoPago: '¿Cuál es tu método de pago?',
      confirmacionMetodoPago: 'Confirmo que mi método de pago es {metodoPago}',
      confirmacionPedido: 'Confirmo mi pedido {metodoPago} {tipoTarjeta}',
      metodosPagoValidos: ['tarjeta', 'fisico', 'Yape', 'Plin'],
      tipoTarjeta: ['Visa', 'Mastercard', 'American Express', 'Diners Club', 'BCP', 'Interbank', 'Tarjeta Oh!', 'Mastercard']
    }
  };

  
  manager.assignDomain('es', 'order.payment', domainPaymentConfig);
  manager.add('es', 'cómo puedo pagar?', 'order.payment.preguntaMetodoPago');
  manager.add('es', 'cuáles son las opciones de pago?', 'order.payment.preguntaMetodoPago');
  manager.add('es', 'aceptan tarjeta de crédito?', 'order.payment.confirmacionMetodoPago');
  manager.add('es', 'cuál es el proceso de pago?', 'order.payment.confirmacionMetodoPago');
  manager.add('es', 'puedo pagar en efectivo?', 'order.payment.confirmacionMetodoPago');
  manager.add('es', 'Quiero realizar el pago de mi pedido', 'order.payment.preguntaMetodoPago');
  manager.add('es', 'Realizar el pago de mi compra', 'order.payment.preguntaMetodoPago');
  manager.add('es', 'Deseo pagar mi orden', 'order.payment.preguntaMetodoPago');
  manager.add('es', 'Pagar mi pedido', 'order.payment.preguntaMetodoPago');
  manager.add('es', 'Quiero hacer el pago de mi compra', 'order.payment.preguntaMetodoPago');
  manager.add('es', 'Realizar el pago de mi pedido y finalizar la compra', 'order.payment.preguntaMetodoPago');
  manager.add('es', 'Deseo pagar mi pedido y completar la compra', 'order.payment.preguntaMetodoPago');
  manager.add('es', 'Pagar mi compra y confirmar el pedido', 'order.payment.preguntaMetodoPago');
  manager.add('es', 'Quiero realizar el pago de mi pedido y finalizar la compra', 'order.payment.preguntaMetodoPago');
  manager.add('es', 'Deseo pagar mi compra y confirmar la orden', 'order.payment.preguntaMetodoPago');
  manager.add('es', 'Realizar el pago de mi compra y finalizar la compra', 'order.payment.preguntaMetodoPago');
  manager.add('es', 'Pagar mi pedido y confirmar el pago', 'order.payment.preguntaMetodoPago');
  manager.add('es', 'Quiero hacer el pago de mi compra y finalizar la compra', 'order.payment.confirmacionMetodoPago');
  manager.add('es', 'Deseo pagar mi pedido y confirmar la compra', 'order.payment.confirmacionMetodoPago');
  manager.add('es', 'Realizar el pago de mi pedido y confirmar el pedido', 'order.payment.confirmacionPedido');
  manager.add('es', 'Pagar mi compra y finalizar el pedido', 'order.payment.confirmacionPedido');
  manager.add('es', 'Quiero hacer el pago de mi compra y confirmar el pedido', 'order.payment.confirmacionPedido');
  manager.add('es', 'Deseo pagar mi pedido y finalizar la compra', 'order.payment.confirmacionPedido');
  manager.add('es', 'Realizar el pago de mi compra y confirmar el pago', 'order.payment.confirmacionPedido');
  manager.add('es', 'Pagar mi pedido y completar la compra', 'order.payment.confirmacionPedido');
  manager.add('es', 'Quiero realizar el pago de mi pedido y confirmar el pago', 'order.payment.confirmacionPedido');
  manager.add('es', 'Deseo pagar mi compra y finalizar la compra', 'order.payment.confirmacionPedido');
  manager.add('es', 'Realizar el pago de mi pedido y completar la compra', 'order.payment.confirmacionPedido');
  manager.add('es', 'Pagar mi compra y confirmar el pago', 'order.payment.confirmacionPedido');
  manager.add('es', 'Quiero hacer el pago de mi compra y confirmar la compra', 'order.payment.confirmacionPedido');
  manager.add('es', 'Deseo pagar mi pedido y confirmar el pedido', 'order.payment.confirmacionPedido');
  manager.add('es', 'Quiero realizar el pago de mi pedido', 'order.payment.preguntaMetodoPago');
  manager.add('es', 'Realizar el pago de mi compra', 'order.payment.preguntaMetodoPago');
  manager.add('es', 'Deseo pagar mi orden', 'order.payment.preguntaMetodoPago');
  manager.add('es', 'Pagar mi pedido', 'order.payment.preguntaMetodoPago');
  manager.add('es', 'Quiero hacer el pago de mi compra', 'order.payment.preguntaMetodoPago');
  manager.add('es', 'Realizar el pago de mi pedido y finalizar la compra', 'order.payment.preguntaMetodoPago');
  manager.add('es', 'Deseo pagar mi pedido y completar la compra', 'order.payment.confirmacionPedido');
  manager.add('es', 'Pagar mi compra y confirmar el pedido', 'order.payment.confirmacionPedido');
  manager.add('es', 'Quiero realizar el pago de mi pedido y finalizar la compra', 'order.payment.confirmacionPedido');
  manager.add('es', 'Deseo pagar mi compra y confirmar la orden', 'order.payment.confirmacionPedido');
  manager.add('es', 'Realizar el pago de mi compra y finalizar la compra', 'order.payment.confirmacionPedido');
  manager.add('es', 'Pagar mi pedido y confirmar el pago', 'order.payment.confirmacionPedido');
  manager.add('es', 'Quiero hacer el pago de mi compra y finalizar la compra', 'order.payment.confirmacionPedido');
  /*
  manager.add('es', 'Deseo pagar mi pedido y confirmar la compra', 'order.payment');
  manager.add('es', 'Realizar el pago de mi pedido y confirmar el pedido', 'order.payment');
  manager.add('es', 'Pagar mi compra y finalizar el pedido', 'order.payment');
  manager.add('es', 'Quiero hacer el pago de mi compra y confirmar el pedido', 'order.payment');
  manager.add('es', 'Deseo pagar mi pedido y finalizar la compra', 'order.payment');
  manager.add('es', 'Realizar el pago de mi compra y confirmar el pago', 'order.payment');
  manager.add('es', 'Pagar mi pedido y completar la compra', 'order.payment');
  manager.add('es', 'Quiero realizar el pago de mi pedido y confirmar el pago', 'order.payment');
  manager.add('es', 'Deseo pagar mi compra y finalizar la compra', 'order.payment');
  manager.add('es', 'Realizar el pago de mi pedido y completar la compra', 'order.payment');
  manager.add('es', 'Pagar mi compra y confirmar el pago', 'order.payment');
  manager.add('es', 'Quiero hacer el pago de mi compra y confirmar la compra', 'order.payment');
  manager.add('es', 'Deseo pagar mi pedido y confirmar el pedido', 'order.payment');
  manager.add('es', 'Realizar el pago de mi compra y finalizar la compra', 'order.payment');
  manager.add('es', 'Pagar mi pedido y confirmar el pago', 'order.payment');
  manager.add('es', 'Quiero realizar el pago de mi pedido', 'order.payment');
  manager.add('es', 'Necesito pagar mi compra', 'order.payment');
  manager.add('es', 'Deseo hacer el pago de mi pedido', 'order.payment');
  manager.add('es', 'Pagar mi orden', 'order.payment');
  manager.add('es', 'Realizar el pago de mi compra', 'order.payment');
  manager.add('es', 'Hacer el pago de mi pedido', 'order.payment');
  manager.add('es', 'Deseo completar el pago de mi compra', 'order.payment');
  manager.add('es', 'Pagar mi compra', 'order.payment');
  manager.add('es', 'Quiero pagar mi pedido', 'order.payment');
  manager.add('es', 'Realizar el pago de mi pedido y finalizar la compra', 'order.payment');
  manager.add('es', 'Hacer el pago de mi compra y confirmar la orden', 'order.payment');
  manager.add('es', 'Deseo completar el pago de mi pedido y finalizar la compra', 'order.payment');
  manager.add('es', 'Pagar mi compra y confirmar el pedido', 'order.payment');
  manager.add('es', 'Quiero realizar el pago de mi compra y confirmar la compra', 'order.payment');
  manager.add('es', 'Hacer el pago de mi pedido y finalizar la compra', 'order.payment');
  manager.add('es', 'Deseo completar el pago de mi compra y confirmar la orden', 'order.payment');
  manager.add('es', 'Pagar mi orden y confirmar el pago', 'order.payment');
  manager.add('es', 'Quiero hacer el pago de mi pedido y confirmar el pedido', 'order.payment');
  manager.add('es', 'Realizar el pago de mi compra y confirmar el pago', 'order.payment');
  manager.add('es', 'Hacer el pago de mi pedido y confirmar el pedido', 'order.payment');
  manager.add('es', 'Deseo completar el pago de mi compra y confirmar la compra', 'order.payment');
  manager.add('es', 'Pagar mi compra y confirmar el pago', 'order.payment');
  manager.add('es', 'Quiero realizar el pago de mi pedido y finalizar la compra', 'order.payment');
  manager.add('es', 'Realizar el pago de mi compra y completar la compra', 'order.payment');
  manager.add('es', 'Hacer el pago de mi pedido y finalizar la compra', 'order.payment');
  manager.add('es', 'Deseo completar el pago de mi compra y finalizar la compra', 'order.payment');
  manager.add('es', 'Pagar mi orden y completar el pedido', 'order.payment');
  manager.add('es', 'Quiero realizar el pago de mi pedido', 'order.payment');
  manager.add('es', 'Necesito pagar mi compra', 'order.payment');
  manager.add('es', 'Deseo hacer el pago de mi pedido', 'order.payment');
  manager.add('es', 'Pagar mi orden', 'order.payment');
  manager.add('es', 'Realizar el pago de mi compra', 'order.payment');
  manager.add('es', 'Hacer el pago de mi pedido', 'order.payment');
  manager.add('es', 'Deseo completar el pago de mi compra', 'order.payment');
  manager.add('es', 'Pagar mi compra', 'order.payment');
  manager.add('es', 'Quiero pagar mi pedido', 'order.payment');
  manager.add('es', 'Realizar el pago de mi pedido y finalizar la compra', 'order.payment');
  manager.add('es', 'Hacer el pago de mi compra y confirmar la orden', 'order.payment');
  manager.add('es', 'Deseo completar el pago de mi pedido y finalizar la compra', 'order.payment');
  manager.add('es', 'Pagar mi compra y confirmar el pedido', 'order.payment');
  manager.add('es', 'Quiero realizar el pago de mi compra y confirmar la compra', 'order.payment');
  manager.add('es', 'Realizar el pago de mi compra y confirmar el pago', 'order.payment');
  manager.add('es', 'Hacer el pago de mi pedido y confirmar el pedido', 'order.payment');
  manager.add('es', 'Deseo completar el pago de mi compra y confirmar la orden', 'order.payment');
  manager.add('es', 'Pagar mi orden y confirmar el pago', 'order.payment');
  manager.add('es', 'Quiero hacer el pago de mi pedido y confirmar el pedido', 'order.payment');
  manager.add('es', 'Realizar el pago de mi compra y confirmar el pago', 'order.payment');
  manager.add('es', 'Hacer el pago de mi pedido y confirmar el pedido', 'order.payment');
  manager.add('es', 'Deseo completar el pago de mi compra y confirmar la compra', 'order.payment');
  manager.add('es', 'Pagar mi compra y confirmar el pago', 'order.payment');
  manager.add('es', 'Quiero realizar el pago de mi pedido y finalizar la compra', 'order.payment');
  manager.add('es', 'Realizar el pago de mi compra y completar la compra', 'order.payment');
  manager.add('es', 'Hacer el pago de mi pedido y finalizar la compra', 'order.payment');
  manager.add('es', 'Deseo completar el pago de mi compra y finalizar la compra', 'order.payment');
  manager.add('es', 'Pagar mi orden y completar el pedido', 'order.payment');
  manager.add('es', 'Quiero realizar el pago de mi pedido', 'order.payment');
  manager.add('es', 'Necesito pagar mi compra', 'order.payment');
  manager.add('es', 'Deseo hacer el pago de mi pedido', 'order.payment');
  manager.add('es', 'Pagar mi orden', 'order.payment');
  manager.add('es', 'Realizar el pago de mi compra', 'order.payment');
  manager.add('es', 'Hacer el pago de mi pedido', 'order.payment');
  manager.add('es', 'Deseo completar el pago de mi compra', 'order.payment');
  manager.add('es', 'Pagar mi compra', 'order.payment');
  manager.add('es', 'Quiero pagar mi pedido', 'order.payment');
  manager.add('es', 'Realizar el pago de mi pedido y finalizar la compra', 'order.payment');
  manager.add('es', 'Hacer el pago de mi compra y confirmar la orden', 'order.payment');
  manager.add('es', 'Deseo completar el pago de mi pedido y finalizar la compra', 'order.payment');
  manager.add('es', 'Pagar mi compra y confirmar el pedido', 'order.payment');
  manager.add('es', 'Quiero realizar el pago de mi compra y confirmar la compra', 'order.payment');
  manager.add('es', 'Realizar el pago de mi compra y confirmar el pago', 'order.payment');
  manager.add('es', 'Hacer el pago de mi pedido y confirmar el pedido', 'order.payment');
  manager.add('es', 'Deseo completar el pago de mi compra y confirmar la orden', 'order.payment');
  manager.add('es', 'Pagar mi orden y confirmar el pago', 'order.payment');
  manager.add('es', 'Quiero hacer el pago de mi pedido y confirmar el pedido', 'order.payment');
  manager.add('es', 'Realizar el pago de mi compra y confirmar el pago', 'order.payment');
  manager.add('es', 'Hacer el pago de mi pedido y confirmar el pedido', 'order.payment');
  manager.add('es', 'Deseo completar el pago de mi compra y confirmar la compra', 'order.payment');
  manager.add('es', 'Pagar mi compra y confirmar el pago', 'order.payment');
  manager.add('es', 'Quiero realizar el pago de mi pedido y finalizar la compra', 'order.payment');
  manager.add('es', 'Realizar el pago de mi compra y completar la compra', 'order.payment');
  manager.add('es', 'Hacer el pago de mi pedido y finalizar la compra', 'order.payment');
  manager.add('es', 'Deseo completar el pago de mi compra y finalizar la compra', 'order.payment');
  manager.add('es', 'Pagar mi orden y completar el pedido', 'order.payment');
  manager.add('es', 'Quiero hacer el pago de mi pedido', 'order.payment');
  manager.add('es', 'Necesito pagar mi compra', 'order.payment');
  manager.add('es', 'Deseo realizar el pago de mi pedido', 'order.payment');
  manager.add('es', 'Pagar mi orden', 'order.payment');
  manager.add('es', 'Realizar el pago de mi compra', 'order.payment');
  manager.add('es', 'Hacer el pago de mi pedido', 'order.payment');
  manager.add('es', 'Deseo completar el pago de mi compra', 'order.payment');
  manager.add('es', 'Pagar mi compra', 'order.payment');
  manager.add('es', 'Quiero pagar mi pedido', 'order.payment');
  manager.add('es', 'Realizar el pago de mi pedido y finalizar la compra', 'order.payment');
  manager.add('es', 'Hacer el pago de mi compra y confirmar la orden', 'order.payment');
  manager.add('es', 'Deseo completar el pago de mi pedido y finalizar la compra', 'order.payment');
  manager.add('es', 'Pagar mi compra y confirmar el pedido', 'order.payment');
  manager.add('es', 'Quiero realizar el pago de mi compra y confirmar la compra', 'order.payment');
  manager.add('es', 'Realizar el pago de mi compra y confirmar el pago', 'order.payment');
  manager.add('es', 'Hacer el pago de mi pedido y confirmar el pedido', 'order.payment');
  manager.add('es', 'Deseo completar el pago de mi compra y confirmar la orden', 'order.payment');
  manager.add('es', 'Pagar mi orden y confirmar el pago', 'order.payment');
  manager.add('es', 'Quiero hacer el pago de mi pedido y confirmar el pedido', 'order.payment');
  manager.add('es', 'Realizar el pago de mi compra y confirmar el pago', 'order.payment');
  manager.add('es', 'Hacer el pago de mi pedido y confirmar el pedido', 'order.payment');
  manager.add('es', 'Deseo completar el pago de mi compra y confirmar la compra', 'order.payment');
  manager.add('es', 'Pagar mi compra y confirmar el pago', 'order.payment');
  manager.add('es', 'Quiero realizar el pago de mi pedido y finalizar la compra', 'order.payment');
  manager.add('es', 'Realizar el pago de mi compra y completar la compra', 'order.payment');
  manager.add('es', 'Hacer el pago de mi pedido y finalizar la compra', 'order.payment');
  manager.add('es', 'Deseo completar el pago de mi compra y finalizar la compra', 'order.payment');
  manager.add('es', 'Pagar mi orden y completar el pedido', 'order.payment');
  */
}

async function loadNluManagerEs() {
  if (!manager) {
    const container = await containerBootstrap();
    container.use(LangEs);
    container.use(NluNeural);
    manager = new NluManager({
      container,
      locales: ['es'],
      trainByDomain: false,
    });
    addGreetingDomainEs(manager);
    addOrderDomainEs(manager);
    addGoodByeEs(manager)
    await manager.train();
  }
  return manager;
}




async function testNluManagerEs(lang, utterance) {
  const loadedManager = await loadNluManagerEs();
  loadedManager.save
  let result = await loadedManager.process(lang, utterance);
  return result
}


module.exports = { testNluManagerEs };



