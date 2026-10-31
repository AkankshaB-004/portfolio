import {createContext,useContext,useEffect,useRef,useState,type ReactNode} from 'react'
import {CONFIG} from './config'

const Ctx=createContext<(m:string)=>void>(()=>{})
export const useNotify=()=>useContext(Ctx)
export function ToastProvider({children}:{children:ReactNode}){
  const [msg,setMsg]=useState('');const t=useRef<number>()
  const notify=(m:string)=>{setMsg(m);window.clearTimeout(t.current);t.current=window.setTimeout(()=>setMsg(''),4200)}
  return <Ctx.Provider value={notify}>{children}
    <div id="toast" role="status" aria-live="polite" style={{display:msg?'block':'none'}}>{msg}</div></Ctx.Provider>
}
/** Highlights any "[Add ...]" placeholder text so unfinished content is obvious. */
export const Ph=({t}:{t:string})=>/\[Add/.test(t)?<span className="ph">{t}</span>:<>{t}</>

export function useReveal<T extends HTMLElement>(){
  const r=useRef<T>(null)
  useEffect(()=>{const el=r.current;if(!el)return
    const io=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.classList.add('in');io.disconnect()}},{threshold:.1})
    io.observe(el);return()=>io.disconnect()},[])
  return r
}
export function ExtLink({url,what,className,children}:{url:string;what:string;className?:string;children:ReactNode}){
  const notify=useNotify()
  return url
    ?<a className={className} href={url} target="_blank" rel="noopener noreferrer">{children}</a>
    :<a className={className} href="#contact" onClick={e=>{e.preventDefault();notify(`Placeholder: add your ${what} in src/config.ts.`)}}>{children}</a>
}
export function ResumeButton({className='btn'}:{className?:string}){
  const notify=useNotify()
  return CONFIG.resumeUrl
    ?<a className={className} href={CONFIG.resumeUrl} download={CONFIG.resumeFile}>Download Resume</a>
    :<a className={className} href="#contact" onClick={e=>{e.preventDefault();notify('Placeholder: resume PDF not added yet. Put it in /public and set resumeUrl in src/config.ts.')}}>Download Resume</a>
}
