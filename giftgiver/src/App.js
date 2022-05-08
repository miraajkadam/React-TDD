import { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      gifts: [],
    }
  }

  addGift = () => {
    const { gifts } = this.state
    const ids = gifts.map(gift => gift.id)
    const max_id = ids.length > 0 ? Math.max(...ids) : 0

    gifts.push({ id: max_id + 1 })

    this.setState({ gifts })
  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        
        <Button onClick={this.addGIft} className="btn-add">
          Add Gift
        </Button>
      </div>
    )
  }
}
