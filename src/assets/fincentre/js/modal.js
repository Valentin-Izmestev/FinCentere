document.addEventListener('DOMContentLoaded', function(){
    //Работа модальных окон
	

	function showModal(modalId){ 
		let modal = document.querySelector('#'+modalId);
		let greatShadow = document.querySelector('.great-shadow');
		modal.setAttribute('aria-hidden', 'false');
		greatShadow.classList.add('show');
		setTimeout(function(){
            modal.classList.add('show');
        }, 200);
	}
 
    function toggleModal(modalId){ 
        let modal = document.querySelector('#'+modalId); 
        let allModal = document.querySelectorAll('.modal');
        allModal.forEach(item=>{
			item.classList.remove('show');
			item.setAttribute('aria-hidden', 'true');
		});

        setTimeout(function(){
            modal.setAttribute('aria-hidden', 'false');
		    modal.classList.add('show');
        }, 200);
         

    }
	
	function hideModal(){ 
		let greatShadow = document.querySelector('.great-shadow');
		let nlModals = document.querySelectorAll('.modal'); 
		
		nlModals.forEach(item=>{ 
			item.classList.remove('show'); 
			item.setAttribute('aria-hidden', 'true');
		}); 
        setTimeout(function(){
            greatShadow.classList.remove('show');
        }, 100);
		
	}
	
	
	let nlShowModalBtn = document.querySelectorAll('.show-modal-btn'); 
	if(nlShowModalBtn.length > 0){
		nlShowModalBtn.forEach(item=>{ 
			item.addEventListener('click', function(){   
				showModal(this.getAttribute('data-modal-id'))
			});
		});
	}

	let greatShadow = document.querySelector('.great-shadow'); 
	if(greatShadow){
		greatShadow.addEventListener('click', function(e){
            if(e.target.className == 'great-shadow show'){
                hideModal();
            } 
        });
	}

    let nlCloseModal = document.querySelectorAll('.close-modal'); 
    if(nlCloseModal.length > 0){ 
        nlCloseModal.forEach(btn=>{
            btn.addEventListener('click', function(){
                hideModal();
            });
        });
    }

	let singUpForm = document.querySelector('.sing-up-form');
	singUpForm.addEventListener('submit', function(e){
		e.preventDefault();
		let formBtnBox = this.querySelector('.form-btn-box');
		formBtnBox.classList.add('form-btn-box--expectation');
	}); 

	$(document).on('af_complete', function(event, response) {
		let formBtnBox = document.querySelector('.form-btn-box');
		formBtnBox.classList.remove('form-btn-box--expectation');
		if(response.success){
			let successMessage = document.querySelector('.modal-message--success');
			successMessage.classList.add('show');
			setTimeout(function(){
				successMessage.classList.remove('show');
				hideModal();
			}, 3000);
		}else{ 
			let errorMessage = document.querySelector('.modal-message--error');
			errorMessage.classList.add('show');
			setTimeout(function(){
				errorMessage.classList.remove('show');
				hideModal();
			}, 3000);
		} 
		
		
	});

})