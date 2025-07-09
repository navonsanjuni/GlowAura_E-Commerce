import Order from "../models/order.js";
import { isCustomer } from "./userController.js";

export async function createOrder(req, res) {
    if(!isCustomer(req)){
        res.json({
            message: "You are not authorized to create an order. Please login as a customer."
        });
        return;
    }
   
    try{

      const latestOrder = await Order.find().sort({date: -1}).limit(1);

      let orderId
      if(latestOrder.length == 0){
          orderId = "CBC0001";
      }else{
        const currentOrderId = latestOrder[0].orderId;
        const numberString = currentOrderId.replace("CBC", "");
        const number = parseInt(numberString);
        const newNumber = (number + 1).toString().padStart(4, '0');

        orderId = "CBC" + newNumber;
      }

        const newOrderData = req.body;
        newOrderData.orderId = orderId;
        newOrderData.email = req.user.email;

        const order = new Order(newOrderData);
        await order.save();
        res.json({
            message: "Order created successfully",
            orderId: orderId
        });
      


    }catch(error){
        res.status(500).json({
            error: error.message
        })
    }
}

export async function getOrders(req, res) {
    if(!isCustomer(req)){
        res.json({
            message: "You are not authorized to view orders. Please login as a customer."
        });
        return;
    }
    try {
        const orders = await Order.find({ email: req.user.email });
        res.json(orders);
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }   
}