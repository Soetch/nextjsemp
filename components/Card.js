import { Unbounded, Inter } from 'next/font/google'

const unbounded = Unbounded({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })

export default function Card() {
    return (
        <div id='card-exemple' className='box-border bg-slate-200 rounded-2xl px-9 py-5 w-80 mt-5 ml-5 mr-5 mb-5'>
          <div>
            <div>
              <div>
                <div id='title' className='text-2xl'>
                  <div className={unbounded.className}>
                    Title
                  </div>
                </div>
                <div id='title'>
                  <div className={inter.className}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}