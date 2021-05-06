import Vue from 'vue'
import VueRouter from 'vue-router'
import CheckoutArea from '../views/CheckoutArea.vue'
import AddressPanel from '../views/AddressPanel.vue'
import TransportPanel from '../views/TransportPanel.vue'
import PaymentPanel from '../views/PaymentPanel.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'checkout-area',
    component: CheckoutArea,
    children: [
      {
        path: '',
        component: AddressPanel
      },
      {
        path: 'transport',
        component: TransportPanel
      },
      {
        path: 'payment',
        component: PaymentPanel
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
