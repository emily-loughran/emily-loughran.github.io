






//scroll down page
             const Loadhere = document.getElementById('Loadhere');

                 Loadhere.scrollIntoView(true);
                    Loadhere.scrollIntoView({
                 block: 'center',
                });




//Filter work

            filterSelection("all")
            function filterSelection(c) {
              var x, i;
              x = document.getElementsByClassName("filterDiv");
              if (c == "all") c = "";
              for (i = 0; i < x.length; i++) {
                w3RemoveClass(x[i], "show");
                if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
              }
            }

            function w3AddClass(element, name) {
              var i, arr1, arr2;
              arr1 = element.className.split(" ");
              arr2 = name.split(" ");
              for (i = 0; i < arr2.length; i++) {
                if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
              }
            }

            function w3RemoveClass(element, name) {
              var i, arr1, arr2;
              arr1 = element.className.split(" ");
              arr2 = name.split(" ");
              for (i = 0; i < arr2.length; i++) {
                while (arr1.indexOf(arr2[i]) > -1) {
                  arr1.splice(arr1.indexOf(arr2[i]), 1);     
                }
              }
              element.className = arr1.join(" ");
            }

            // Add active class to the current button (highlight it)
            var btnContainer = document.getElementById("myBtnContainer");
            var btns = btnContainer.getElementsByClassName("btn");
            for (var i = 0; i < btns.length; i++) {
              btns[i].addEventListener("click", function(){
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
              });
            }







//Loop scroll
                var doc = window.document,
                  context = doc.querySelector('.js-loopContainer'),
                  items = doc.querySelectorAll('.js-loopItem'),
                  clones = [],
                  disableScroll = false,
                  scrollHeight = 0,
                  scrollPos = 0,
                  clonesHeight = 0

                function getScrollPos () {
                  return (context.pageYOffset || context.scrollTop) - (context.clientTop || 0)
                }

                function setScrollPos (pos) {
                  context.scrollTop = pos
                }

                function getClonesHeight () {
                  clonesHeight = 0

                  Array.from(clones, clone => {
                    clonesHeight = clonesHeight + clone.offsetHeight
                  })

                  return clonesHeight
                }

                function reCalc () {
                  scrollPos = getScrollPos()
                  scrollHeight = context.scrollHeight
                  clonesHeight = getClonesHeight()

                  if (scrollPos <= 0) {
                    setScrollPos(1) // Scroll 1 pixel to allow upwards scrolling
                  }
                }

                function scrollUpdate () {
                  if (!disableScroll) {
                    scrollPos = getScrollPos()

                    if (clonesHeight + scrollPos >= scrollHeight) {
                      // Scroll to the top when you’ve reached the bottom
                      setScrollPos(1) // Scroll down 1 pixel to allow upwards scrolling
                      disableScroll = true
                    } else if (scrollPos <= 0) {
                      // Scroll to the bottom when you reach the top
                      setScrollPos(scrollHeight - clonesHeight)
                      disableScroll = true
                    }
                  }

                  if (disableScroll) {
                    // Disable scroll-jumping for a short time to avoid flickering
                    window.setTimeout(function () {
                      disableScroll = false
                    }, 40)
                  }
                }

                function onLoad () {
                  Array.from(items, item => {
                    const clone = item.cloneNode(true)
                    context.appendChild(clone)
                    clone.classList.add('js-clone')
                  })

                  clones = context.querySelectorAll('.js-clone')

                  reCalc()

                  context.addEventListener('scroll', function () {
                    window.requestAnimationFrame(scrollUpdate)
                  }, false)

                  window.addEventListener('resize', function () {
                    window.requestAnimationFrame(reCalc)
                  }, false)
                }

                window.onload = onLoad



//open filter overlay
             
            function openFilter() {
              document.getElementById("myBtnContainer").style.height = "100%";
            }

            function closeFilter() {
              document.getElementById("myBtnContainer").style.height = "0%";
            }

           





