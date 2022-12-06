// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  OnIncrementMangoes = () => {
    this.setState(prevState => {
      console.log(`previous mangoes value ${prevState.mango}`)
      return {mango: prevState.mango + 1}
    })
  }

  OnIncrementBanana = () => {
    this.setState(prevState => {
      console.log(`previous bananas value ${prevState.banana}`)
      return {banana: prevState.banana + 1}
    })
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="count">{mango}</span> mangoes{' '}
            <span className="count">{banana}</span> bananas
          </h1>
          <div className="image-container">
            <div className="sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                className="image"
                alt="mango"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.OnIncrementMangoes}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="sub-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                className="image"
                alt="banana"
              />
              <div>
                <button
                  type="button"
                  className="button"
                  onClick={this.OnIncrementBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
