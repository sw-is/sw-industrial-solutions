const resizeListener =(setViewport)=>{
  setViewport(window.innerWidth);

  function handleViewportResize () {
    setViewport(window.innerWidth);
  }

  window.addEventListener('resize', handleViewportResize);
  return () => {
    window.removeEventListener('resize', handleViewportResize);
  };
}
export default resizeListener;
