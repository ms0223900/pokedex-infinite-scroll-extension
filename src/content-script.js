(() => {
  const loadMoreBtnEl = document.querySelector('.pokemon-list__load-more__button');

  const config = {
    DETECT_BOTTOM_DISTANCE: 200,
  }

  const debounce = (cb, timeMs = 100) => {
    let timer;
    const fn = () => {
      let res;
      if (timer) return;
      timer = setTimeout(() => {
        res = cb();
        clearTimeout(timer);
        timer = undefined;
        // if (!timer) {
        // }
      }, timeMs);
      return res;
    };
    return fn;
  };

  const handleDetectBottomAndCallback = (bottomDistance = 100, callback = () => {}) => {
    const bottomPaddingFromPage =
      window.innerHeight + window.scrollY - document.body.offsetHeight;
    if (bottomPaddingFromPage > bottomDistance * -1) {
      callback && callback();
    }
  }

  const handleDetectAndLoadMore = () => {
    const handleLoadMore = () => loadMoreBtnEl.click()
    handleDetectBottomAndCallback(config.DETECT_BOTTOM_DISTANCE, handleLoadMore);
  }

  window.addEventListener('scroll', debounce(handleDetectAndLoadMore, 50))
})()