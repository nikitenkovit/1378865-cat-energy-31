(
  function () {
    const Node = {
      container: document.querySelector('.example-slider'),
      imageBefore: document.querySelector('.example-slider__before'),
      comparisonLine: document.querySelector('.example-slider__line'),
      comparisonButton: document.querySelector('.example-slider__button')
    };

    const borderWidth = 4;

    const isScriptNotAvailable = Object.values(Node).some((it) => !it);

    if (isScriptNotAvailable) {
      return;
    }

    const moveHandler = (event) => {
      event.preventDefault();

      const containerWidth = Node.container.offsetWidth;
      const containerLeft = Node.container.getBoundingClientRect().left;

      let clientX = event.clientX;
      let pageX = event.pageX;

      if (event.touches) {
        clientX = event.touches[0].clientX;
        pageX = event.touches[0].pageX;
      }

      const removeHandlers = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('touchmove', onMouseMove);
        Node.comparisonButton.onmouseup = null;
      };

      const shiftX = clientX - Node.comparisonLine.getBoundingClientRect().left;

      const moveAt = (newPageX) => {

        const moveValue = newPageX - containerLeft - shiftX;

        if (moveValue > 0 && moveValue < containerWidth - borderWidth) {
          Node.comparisonLine.style.left = `${moveValue}px`;
        } else {
          removeHandlers();
        }

        const lineLeft = Node.comparisonLine.offsetLeft;

        Node.imageBefore.style.width = `${lineLeft}px`;
      };

      moveAt(pageX);

      Node.comparisonLine.style.transform = 'none';

      function onMouseMove(mouseEvent) {
        let newPageX = mouseEvent.pageX;

        if (mouseEvent.touches) {
          newPageX = mouseEvent.touches[0].pageX;
        }

        moveAt(newPageX);
      }

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('touchmove', onMouseMove);

      Node.comparisonButton.addEventListener('mouseup', removeHandlers);
      Node.comparisonButton.addEventListener('touchend', removeHandlers);
    };

    Node.comparisonButton.addEventListener('mousedown', moveHandler);
    Node.comparisonButton.addEventListener('touchstart', moveHandler);

    window.addEventListener('resize', () => {
      Node.comparisonLine.style.left = '50%';
      Node.imageBefore.style.width = '50%';
    });
  }
)();
