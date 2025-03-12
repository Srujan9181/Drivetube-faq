import React from 'react'
import './App.css'
import cs from './assets/customer-service.png'
import women from './assets/woman.png'
import worker from './assets/worker.png'


function App() {

  function handlearrow(e){
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4129293622.
    let a1=document.getElementById('a1')
    let a2=document.getElementById('a2')
    let a3=document.getElementById('a3')
    let a4=document.getElementById('a4')
    let arrow1=document.getElementById('q1arrow')
    let arrow2=document.getElementById('q2arrow')
    let arrow3=document.getElementById('q3arrow')
    let arrow4=document.getElementById('q4arrow')
    if (e.target.id==="q1"){
      a1.style.display="block"
      a1.style.marginBottom="20px";
      a2.style.display="none"
      a3.style.display="none"
      a4.style.display="none"
      arrow1.innerHTML="^"
      arrow2.innerHTML="v"
      arrow3.innerHTML="v"
      arrow4.innerHTML="v"
      
    }
    if (e.target.id==="q2"){
      
      a2.style.display="block"
      a2.style.marginBottom="20px";
      a1.style.display="none"
      a3.style.display="none"
      a4.style.display="none"
      arrow1.innerHTML="v"
      arrow2.innerHTML="^"
      arrow3.innerHTML="v"
      arrow4.innerHTML="v"
      
    }
    if (e.target.id==="q3"){
      a3.style.display="block"
      a3.style.marginBottom="20px";
      a1.style.display="none"
      a2.style.display="none"
      a4.style.display="none"
      arrow1.innerHTML="v"
      arrow2.innerHTML="v"
      arrow3.innerHTML="^"
      arrow4.innerHTML="v"

    }
    if (e.target.id==="q4"){
      a4.style.display="block"
      a1.style.display="none"
      a2.style.display="none"
      a3.style.display="none"
      arrow1.innerHTML="v"
      arrow2.innerHTML="v"
      arrow3.innerHTML="v"
      arrow4.innerHTML="^"

    }
   
    
  }
  return (
    <>
    
    <header>
      <p className='heading'>Frequently asked questions</p>
      <p className='caption'>Get to know more about ready-to-use admin dashboard templates</p>
    </header>

    <main className='faqs'>
  
  <div className='question' id="q1" onClick={handlearrow}>What is an Admin Dashbord? <span id='q1arrow'>v</span></div>
      <div className='answer' id='a1'>Admin Dashboard is the backend interface of a website or an application that helps to manage the websito's overall content and settings. It is widely used by the sito owners to koop track of their website, make changes to their content, and more.</div>
      <div className='question' id="q2" onClick={handlearrow}>What should an admin dashboard template include? <span  id='q2arrow' >v</span></div>
      <div className='answer'id='a2'>ans2</div>
      <div className='question' id="q3" onClick={handlearrow}>Why should i buy admin templates from AdminMart? <span id='q3arrow' >v</span></div>
      <div className='answer' id='a3'>ans3</div>
      <div className='question' id="q4" onClick={handlearrow}>Do Adminmart offers a money back gurantee <span id='q4arrow'>v</span></div>
      <div className='answer' id='a4'>ans4</div>
    </main>
    <footer>
      <div>
        <img src={cs} alt="" />
        <img src={women} alt="" />
        <img src={worker} alt="" />
      </div>
      <div className='heading'>Still have questions</div>
      <div className='caption'>Can't find the answer you're looking for? Please chat to our friendly team</div>
      <button>Chat with us</button>
    </footer>
    </>
  )
}

export default App