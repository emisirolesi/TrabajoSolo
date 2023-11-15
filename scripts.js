
        let currentStep = 1;
      
        function showStep(step) {
          document.querySelectorAll('[id^="step"]').forEach(element => {
            element.style.display = 'none';
          });
          document.getElementById(`step${step}`).style.display = 'block';
        }
      
        function nextStep(step) {
          if (step === currentStep && step < 3) {
            currentStep++;
            showStep(currentStep);
          }
        }
      
        function prevStep(step) {
          if (step === currentStep && step > 1) {
            currentStep--;
            showStep(currentStep);
          }
        }
      
        showStep(currentStep); // Mostrar el primer paso al cargar la página