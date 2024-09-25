document.addEventListener('DOMContentLoaded', function() {
  const creamThumbnails = document.querySelectorAll('.cream-thumbnail');
  const creamName = document.getElementById('cream-name');
  const creamDescription = document.getElementById('cream-description');
  const creamTop = document.querySelector('.cream-part--top');
  const creamBottom = document.querySelector('.cream-part--bottom');
  const creamData = {
      'regenerativna': {
          name: 'Regenerativna',
          description: 'Podstiče regeneraciju kože, čini je glatkom, nahranjenom i podmlađenom.',
          topImg: 'images/FullKreme/gornji_deo/regenerativna_gore.jpg',
          bottomImg: 'images/FullKreme/donji_deo/regenerativna_dole.jpg'
      },
      'hidratantna': {
          name: 'Hidratantna',
          description: 'Održava hidrataciju kože, čineći je mekom i elastičnom.',
          topImg: 'images/FullKreme/gornji_deo/hidratantna_gore.jpg',
          bottomImg: 'images/FullKreme/donji_deo/hidratantna_dole.jpg'
      },
      'antireumatska': {
          name: 'Antireumatska',
          description: 'Pomaže u ublažavanju bolova u zglobovima i mišićima, poboljšava cirkulaciju.',
          topImg: 'images/FullKreme/gornji_deo/antireumatska_gore.jpg',
          bottomImg: 'images/FullKreme/donji_deo/antireumatska_dole.jpg'
      },
      'cokoladna': {
          name: 'Čokoladna',
          description: 'Nahranjuje i hidrira kožu, ostavljajući je mekom i osveženom.',
          topImg: 'images/FullKreme/gornji_deo/cokoladna_gore.jpg',
          bottomImg: 'images/FullKreme/donji_deo/cokoladna_dole.jpg'
      }
  };

  let isAnimating = false;

  creamThumbnails.forEach(thumbnail => {
      thumbnail.addEventListener('click', () => {
          if (isAnimating || thumbnail.classList.contains('active')) return;
          isAnimating = true;

          // Remove 'active' class from all thumbnails
          creamThumbnails.forEach(thumb => thumb.classList.remove('active'));
          // Add 'active' class to the clicked thumbnail
          thumbnail.classList.add('active');

          const creamKey = thumbnail.getAttribute('data-cream');
          const creamInfo = creamData[creamKey];

          // Animate out current cream
          creamTop.style.animation = 'exitToLeft 0.8s forwards';
          creamBottom.style.animation = 'exitToRight 0.8s forwards';

          setTimeout(() => {
              // Update images and text
              creamName.textContent = creamInfo.name;
              creamDescription.textContent = creamInfo.description;
              creamTop.src = creamInfo.topImg;
              creamBottom.src = creamInfo.bottomImg;

              // Reset animations
              creamTop.style.animation = '';
              creamBottom.style.animation = '';

              // Set initial positions for the new cream parts
              creamTop.style.transform = 'translateX(-150%) rotate(180deg)';
              creamBottom.style.transform = 'translateX(150%) rotate(180deg)';
              creamTop.style.opacity = '0';
              creamBottom.style.opacity = '0';

              // Animate in new cream
              creamTop.style.animation = 'enterFromLeft 0.8s forwards';
              creamBottom.style.animation = 'enterFromRight 0.8s forwards';

              setTimeout(() => {
                  isAnimating = false;
              }, 800);
          }, 800);
      });
  });
});
