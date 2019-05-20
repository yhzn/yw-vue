export let isBasic = (it) => {
    return it===null || ( typeof it !== "object" && typeof it !== "array");
}
export let clone =  (it) => {
    if(isBasic(it)){
        return it;
    }
    let result = Array.isArray(it) ? [] : {};
    for (let i in it){
        result[i]=clone(it[i]);
    }
    return result;
}

let is = (it,type) => {
    return ({}).toString.call(it)===`[object ${type}]`;

}

export let isFunction = (it) => {
    return is(it,'Function')

}

export let countDown = (ctx,buttonText,fn=()=>{},sec=60) => {
    if(ctx[buttonText+"Flag"]){
        return false;
    }
    fn();
    ctx[buttonText+"Flag"]=true;
    ctx[buttonText]=`${sec} s后重新获取`;
    ctx.timer=setInterval(()=>{
         ctx[buttonText]=`${--sec} s后重新获取`;
         if(sec<0){
             clearInterval(ctx.timer);
             ctx[buttonText+"Flag"]=false;
             ctx[buttonText]="获取验证码";
         }
    },1000)
}
