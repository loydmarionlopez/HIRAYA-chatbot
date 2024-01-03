const homeBtn = document.getElementById('homeBtn'); 
      homeBtn.addEventListener('click', goToHomePage); 
      const newChat = document.getElementById('newChat'); 
      newChat.addEventListener('click', goToNewChat);

      function goToNewChat(){
        window.location.href = 'HomeChatPage.html';
      }
      function goToHomePage(){
          window.location.href = 'Homepage.html';
      }

      