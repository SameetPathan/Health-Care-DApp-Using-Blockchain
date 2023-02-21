import React from 'react'
import '../service.css';
function OurService(props) {
  return (
    <>
    <div class="product-section mt-150 mb-150">
		<div class="container">
			<div class="row">
				<div class="col-lg-8 offset-lg-2 text-center">
					<div class="section-title">	
						<h3><span class="orange-text">Welcome{props.to}</span>, {props.text}</h3>
						<p>Just A Rather Very Intelligent System In HealthChain  </p>
					</div>
				</div>
			</div>

	
		</div>
	</div>
	
    </>
  )
}

export default OurService