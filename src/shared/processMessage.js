const whatsappServices = require("../services/whatsappServices");
const whatsappModel = require("../shared/Model");
const nlpManager = require('../shared/nlpManager');

async function process(message, number) {
  try {
    let result = await nlpManager.testNluManagerEs("es", message,{ includeDomains: true })
    let messageReturn;
    let model;

    if (result.domain === 'saludo') {
      model = whatsappModel.MessageType.typeText(number, ' *Bienvenido a "La Glorieta"* \n _Que deseas comapeñer@_')
    }
    
    else if (result.domain === 'order.request') {
      model = whatsappModel.MessageType.typeText(number, 'Su pedido sera atendido en unos minutos')
    }
    else if ((result.intent.split(".")[0] +"."+ result.intent.split(".")[1]) === 'order.menu') {
      
      if (result.intent == "order.menu.obtenerMenuDia") {
        model = whatsappModel.MessageType.typeDocument(number,'https://www.laglorietarestaurant.com/uploads/carta/cartagrande.pdf','Menu del Dia')
        
      }
      else if (result.intent == "order.menu.obtenerMenu") {
        model = whatsappModel.MessageType.typeDocument(number,'https://www.laglorietarestaurant.com/uploads/carta/cartachica.pdf','Menu del Completo')
      }
      else {
        messageReturn = 'No se ha especificado una opción válida'
      }

      
    }
    else if ((result.intent.split(".")[0] +"."+ result.intent.split(".")[1]) === 'order.confirmation') {
      /*
      const confirmacionPedido = result.domain.parameters.confirmacionPedido;
      const confirmacionPedidoMetodoPago = result.domain.parameters.confirmacionPedidoMetodoPago;
      const metodoPago = result.domain.parameters.metodoPago;
      */
      if (result.intent === "order.confirmation.confirmacionPedido") {
        model = whatsappModel.MessageType.typeText(number, 'Su pedido se confirmo')
    
      } else if (result.intent === "order.confirmation.confirmacionPedidoMetodoPago") {
        model = whatsappModel.MessageType.typeText(number, 'Su pedido se confirmo y los metodos pagos son:')
      } else {
        model = whatsappModel.MessageType.typeText(number, 'No entiendo su confirmacion')
      }
      
    }

    else if ((result.intent.split(".")[0] +"."+ result.intent.split(".")[1]) === 'order.cancelation') {
        /*
        const cancelacionPedido = result.domain.parameters.cancelacionPedido;
        const cancelacionPedidoReembolso = result.domain.parameters.cancelacionPedidoReembolso;
        */
      if (result.intent === "order.confirmation.cancelacionPedido") {
        model = whatsappModel.MessageType.typeText(number, 'Cancelacion de pedido en proceso')

      } else if (result.intent === "order.confirmation.cancelacionPedidoReembolso") {
        model = whatsappModel.MessageType.typeText(number, 'Cancelacion de pedido en proceso y reembolso')

      } else {
        model = whatsappModel.MessageType.typeText(number, 'No se ha especificado una opción válida de cancelación del pedido')

      }
    }
    else if ((result.intent.split(".")[0] +"."+ result.intent.split(".")[1]) === 'order.payment') {
      //Pruebas Implementar API
      const metodoPagos = ['Tarjeta','Fisico','Yape']
      const empresaPagos = ['BCP']

      /*
      const metodoPagoConfirmado = result.domain.parameters.confirmacionMetodoPago
      const metodoPago = result.domain.parameters.metodoPago
      const tipoTarjeta = result.domain.parameters.tipoTarjeta
      */
      if(result.intent ==="order.payment.preguntaMetodoPago"){
        model = whatsappModel.MessageType.typeText(number, 'Los metodos de pagos disponibles son : yape , etc')
      }
      else if(result.intent ==="order.payment.confirmacionMetodoPago"){
        model = whatsappModel.MessageType.typeText(number, 'Verificar si el metodo de pago esta disponible')
        /*
        if(metodoPagos.includes(metodoPago)){
          messageReturn=processPayment(metodoPago)
        }
        else{
          messageReturn ='El metodo de pago no esta disponible'
        }
        */
      }
      else if(result.intent ==="order.payment.confirmacionPedido"){
        model = whatsappModel.MessageType.typeText(number, 'Verificar si el metodo de pago esta disponible y se confirmara el pedido')
        /*
        if(metodoPagos.includes(metodoPago) && empresaPagos.includes(metodoPago))
        {
          messageReturn = `Pedido confirmado con método de pago: ${metodoPago}, Tipo de tarjeta: ${tipoTarjeta}`
        }
        else{
          messageReturn ='El metodo de pago no esta disponible'
        }
        */
      }
    }
    else if (result.domain === 'despedida') {
      model = whatsappModel.MessageType.typeText(number, 'Hasta luego')
    }
    whatsappServices.SendMessageText(model)
  } catch (error) {
    let model = whatsappModel.MessageType.typeText(number, 'Upps, ocurrió un error inesperado')
    whatsappServices.SendMessageText(model)
  }

  return message;
}

module.exports = {process}

async function processPayment(metodoPago){
  switch(metodoPago){
    case 'tarjeta':
      messageReturn ='Lista de tarjetas'
      break
    case 'fisico':
      messageReturn ='Al llegar el pedido ,lo cancelara con el repartidor'
      break
    case 'Yape':
      messageReturn ='Se le pasara el QR de yape'
      break
    case 'Plin':
      messageReturn ='Se le pasara el QR de plin'
      break
    default :
      messageReturn ='El metodo de pago no esta disponible'
      break
  }
  return messageReturn
}