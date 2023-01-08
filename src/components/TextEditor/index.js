import {Component} from 'react'
import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import {TextArea, Button} from './styledComponents'
import './index.css'

class TextEditor extends Component {
  state = {bold: false, underLine: false, italic: false}

  changeToBold = () => {
    this.setState(prevState => ({bold: !prevState.bold}))
  }

  changeToItalic = () => {
    this.setState(prevState => ({italic: !prevState.italic}))
  }

  changeToUnderline = () => {
    this.setState(prevState => ({underLine: !prevState.underLine}))
  }

  render() {
    const {bold, underLine, italic} = this.state
    const boldColor = bold ? '#faff00 ' : '#f1f5f9 '
    const italicColor = italic ? '#faff00 ' : '#f1f5f9 '
    const underLineColor = underLine ? '#faff00 ' : '#f1f5f9 '
    console.log(boldColor)

    return (
      <div className="app-container">
        <div className="content-container">
          <div className="image-container">
            <h1 className="main-heading">Text Editor</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
              className="image"
            />
          </div>
          <div className="text-container">
            <ul className="unordered-list-container">
              <li className="list-items">
                <Button
                  type="button"
                  data-testid="bold"
                  onClick={this.changeToBold}
                  color={boldColor}
                >
                  <VscBold size={25} />
                </Button>
              </li>
              <li className="list-items">
                <Button
                  type="button"
                  data-testid="italic"
                  onClick={this.changeToItalic}
                  color={italicColor}
                >
                  <GoItalic size={25} />
                </Button>
              </li>
              <li className="list-items">
                <Button
                  type="button"
                  data-testid="underline"
                  onClick={this.changeToUnderline}
                  color={underLineColor}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </li>
            </ul>
            <br />

            <TextArea
              bold={bold}
              underLine={underLine}
              italic={italic}
              className="tetra"
              rows="1"
              cols="60"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TextEditor
