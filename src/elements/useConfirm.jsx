const useConfirm = (message = "", onConfirm, onCancel, id) => {//message의 기본값(초기값)설정
    //함수의 존재를 확인한 다음, 존재한다면 type을 확인한다.
    if(!onConfirm && typeof(onConfirm) !== "function"){
      return;
    }
    if(!onCancel && typeof(onCancel) !== "function"){
      return;
    }
    const confirmAction = (id) => {
      if(window.confirm(message)){
        onConfirm(id);
      }else{onCancel();}
    }
    return confirmAction;
  }
  
  export default useConfirm;