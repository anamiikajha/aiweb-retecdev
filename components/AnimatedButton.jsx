import React from 'react'

function AnimatedButton() {
  return (
    <div className="button-wrap"><div className="w-embed"><style dangerouslySetInnerHTML={{__html: "\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n }\n\n.border-gradient{\nanimation: spin 6s linear infinite;\nbackground:conic-gradient(from 0 at 50% 50%,rgba(255,255,255,.2) 0deg,rgba(255,255,255,0) 60deg,rgba(255,255,255,0) 310deg,rgba(255,255,255,.5) 360deg);\n}\n\n\n\n.main-button-n:hover .border-gradient {\n  animation-duration: 6s;\n  animation-play-state: running;\n}\n\n" }} /></div><div className="main-button-n"><div className="button-bg"><input type="submit" data-wait="Please wait..." data-tracker="create_call" className="button-inside w-button" defaultValue="Get a Quote" /></div><div className="border-gradient" /></div></div>
  )
}

export default AnimatedButton