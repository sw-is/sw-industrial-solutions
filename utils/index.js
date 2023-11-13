export const capitalise = (string)=> {
return `${string.charAt(0).toUpperCase()}${string.slice(1)}`
}

export const resizeListener =(setViewport)=>{
  setViewport(window.innerWidth);

  function handleViewportResize () {
    setViewport(window.innerWidth);
  }

  window.addEventListener('resize', handleViewportResize);
  return () => {
    window.removeEventListener('resize', handleViewportResize);
  };
}
