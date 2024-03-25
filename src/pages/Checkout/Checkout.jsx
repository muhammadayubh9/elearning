import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import './Checkout.scss'
import p from '../../assets/img/Checkout/p.png'
import express from '../../assets/img/Checkout/expres.png'
import visa from '../../assets/img/Checkout/visa.png'
import mastercard from '../../assets/img/Checkout/mastercard.png'
import teacher from '../../assets/img/Checkout/teaching.png'
import TopEducation from '../../components/TopEducation/TopEducation'
import {lessons} from '../../lib/CoursePageDatas'

function Checkout() {
  document.title = "Checkout"
  return (
    <div className='checkout__page'>
      <Header />

      <div className="cards">
        <div className="checkout">
          <h1>Checkout</h1>
          <p>Cart Type</p>
          <div className="imgs">
            <img src={p} alt="" />
            <img src={express} alt="" />
            <img src={visa} alt="" />
            <div className="mastercard_hover">
              <img src={mastercard} alt="" />
            </div>
          </div>

          <form action="#" className='form'>
            <label>Name on Card</label>
            <input className='card_inputs' type="text" name="name" placeholder='Enter name on Card' />

            <label>Card Number</label>
            <input className='card_inputs' type="text" name="number" placeholder='Enter Card Number' />

            <div className='other__input'>
              <div className="div__input">
                <label>Expiration Date ( MM/YY )</label>
                <input className='card_inputs' type="text" name='date' placeholder='Enter Expiration Date' />
              </div>

              <div className="div__input">
                <label>CVC</label>
                <input className='card_inputs' type="text" name='cvc' placeholder='Enter CVC' />
              </div>
            </div>

            <span><input type="checkbox" name="" id="" /> Save my information for faster checkout</span>

            <button className="btn">Confirm Payment</button>
          </form>

        </div>

        <div className="summary">
          <h1>Summary</h1>

          <div className='div'>
            <img src={teacher} alt="" />
            <div className="div__text">
              <p>adipising elit, sed do eiusmod tempor</p>
              <span>Lorem ipsum dollar...</span>
              <h1>$24.69</h1>
            </div>
          </div>

          <hr />

          <div className='div'>
            <img src={teacher} alt="" />
            <div className="div__text">
              <p>adipising elit, sed do eiusmod tempor</p>
              <span>Lorem ipsum dollar...</span>
              <h1>$24.69</h1>
            </div>
          </div>

          <hr />

          <div className="subtotal">
            <p>Subtotal</p>
            <p>$51.38</p>
          </div>
          <hr />
          <div className="coupon">
            <p>Coupon Discount</p>
            <p>0 %</p>
          </div>
          <hr />
          <div className="tax">
            <p>TAX</p>
            <p>5</p>
          </div>
          <hr />
          <div className="total">
            <p>Total</p>
            <p>$56.38</p>
          </div>


        </div>

      </div>


      <TopEducation data={{lessons}} />
      <Footer />
    </div>
  )
}

export default Checkout