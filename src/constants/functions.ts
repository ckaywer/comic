import { Dimensions } from 'react-native';
export const deviceWidthDp = Dimensions.get('window').width;
export const deviceHeightDp = Dimensions.get('window').height;
export const designWidthPx = 375; 
export const designHeightPx = 667;
export const landscape = (elementPx:number) => { return (elementPx * deviceHeightDp) / designHeightPx; };
export const portrait = (elementPx:number) => { return (elementPx * deviceWidthDp) / designWidthPx; };
export const scale = (value:number) : number => portrait(value);
export const br2nl = (value:string) => value.replace(/<br\/> /g, "");
export const size = (value:number) => value / 4;
export const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));
export const validateEmail = (email) => String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
export const distance = (p1:{x:number, y:number}, p2:{x:number, y:number})=>{ let y = p2.x - p1.x, x = p2.y - p1.y; return Math.sqrt(x * x + y * y); }
export const nonceGen = (l:number) => { let r = '' , c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; for (let i = 0; i < l; i++) r += c.charAt(Math.floor(Math.random() * c.length)); return r; }
export const hook = (baseClass, target, addition) => {
    if (baseClass.prototype[target]) baseClass = baseClass.prototype;
    else if (!baseClass[target]) throw new Error('フック先が無いんですけど！');
    var origin = baseClass[target];
    baseClass[target] = function() {
        arguments[arguments.length] = origin;
        arguments.length++;
        return addition.apply(this, arguments);
    };
}