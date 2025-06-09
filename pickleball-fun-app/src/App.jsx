
import { useState } from 'react'
import './App.css'

const rules = [
  "Double Trouble: You must hold two paddles, one in each hand.",
  "One Paddle, Two Players: Two players must share one paddle.",
  "Swap Hands: Everyone must play with their non-dominant hand.",
  "Freeze After Hit: After each hit, the player must freeze in place for 3 seconds.",
  "Spin Master: Every serve must be a spin serve.",
  "Call Before Hit: Shout your partner’s name before every hit.",
  "Silence Mode: No talking allowed during the rally.",
  "Lefty Serve Only: All serves must be done with your left hand.",
  "Eyes Wide Shut: Must close eyes while serving.",
  "Two-Bounce Rule: Ball must bounce twice before being returned.",
  "One Foot Challenge: You can only play standing on one foot.",
  "No Paddle Game: Hit the ball using your hand (like a palm strike).",
  "Ping Pong Style: Alternate hits between partners (like doubles ping pong).",
  "Crossover Chaos: You must switch sides with your partner after every point.",
  "Sing for the Serve: You must sing a line of a song when serving.",
  "Backwards Only: Must move only backward during the point.",
  "Bounce & Catch: Before returning, the ball must be caught and dropped.",
  "Tiny Court: Play only in the kitchen area.",
  "Giant Serve: Stand 3 feet behind the baseline to serve.",
  "Eye Patch Round: One eye covered while playing.",
  "Hop Rally: Hop on one foot while the ball is in play.",
  "Face-Off Limit: Only one player may face the net at a time.",
  "Shout Color Name: Call out the shirt color of your opponent before each hit.",
  "No Backhand: You must only use forehands.",
  "Kitchen Freeze: If you enter the kitchen, you must freeze for 3 seconds.",
  "Spin to Win: Must do a 360 spin before each hit.",
  "Quick Serve Round: You must serve within 3 seconds of getting the ball.",
  "Tennis Elbow: All shots must be underhand with arm kept straight.",
  "One Bounce Max: Can only let the ball bounce once per game (total).",
  "No-Stay Zone: Nobody can stay inside the court for more than 3 seconds."
]

function App() {
  const [rule, setRule] = useState('Press the button to get your fun rule!')

  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>🎾 Pickleball Fun Rule Generator</h1>
      <div style={{margin: '30px auto', padding: '20px', maxWidth: '500px', border: '1px solid #ccc', borderRadius: '8px'}}>
        <p>{rule}</p>
      </div>
      <button onClick={() => setRule(rules[Math.floor(Math.random() * rules.length)])}>
        Generate Rule
      </button>
    </div>
  )
}

export default App
