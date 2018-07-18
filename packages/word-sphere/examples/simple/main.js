import cax from 'cax'
import WordSphere from '../../src'

const stage = new cax.Stage(800, 800, '#canvasCtn')

const ws = new WordSphere([
  { text: '紅樓夢', value: '6' },
  { text: '賈寶玉', value: '3' },
  { text: '林黛玉', value: '3' },
  { text: '薛寶釵', value: '3' },
  { text: '王熙鳳', value: '3' },
  { text: '李紈', value: '3' },
  { text: '賈元春', value: '3' },
  { text: '賈迎春', value: '3' },
  { text: '賈探春', value: '3' },
  { text: '賈惜春', value: '3' },
  { text: '秦可卿', value: '3' },
  { text: '賈巧姐', value: '3' },
  { text: '史湘雲', value: '3' },
  { text: '妙玉', value: '3' },
  { text: '賈政', value: '2' },
  { text: '賈赦', value: '2' },
  { text: '賈璉', value: '2' },
  { text: '賈珍', value: '2' },
  { text: '賈環', value: '2' },
  { text: '賈母', value: '2' },
  { text: '王夫人', value: '2' },
  { text: '薛姨媽', value: '2' },
  { text: '尤氏', value: '2' },
  { text: '平兒', value: '2' },
  { text: '鴛鴦', value: '2' },
  { text: '襲人', value: '2' },
  { text: '晴雯', value: '2' },
  { text: '香菱', value: '2' },
  { text: '紫鵑', value: '2' },
  { text: '麝月', value: '2' },
  { text: '小紅', value: '2' },
  { text: '金釧', value: '2' },
  { text: '甄士隱', value: '2' },
  { text: '賈雨村', value: '2' }
], {})

stage.add(ws)
ws.x = 100
ws.y = 100
cax.tick(()=>{
  stage.update()
  ws.update()
})
