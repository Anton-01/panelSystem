declare const $ : any;

const showToastErrorMessage = ( message : string) => {
  $.notify( message, {
    type: 'danger',
    spacing: 10,
    timer: 2000,
    placement: {
      from: 'top',
      align: 'right'
    },
    delay: 1000,
    animate: {
      enter: 'animated ' + 'fadeIn',
      exit: 'animated ' + 'fadeIn'
    }
  });
}


export { showToastErrorMessage}
