/** @format */

import React from 'react'
import {Route} from 'wouter'
import chroma from 'chroma-js'
import 'semantic-ui-css/semantic.min.css'
import {Dropdown, Grid} from 'semantic-ui-react'
import colors from './colors.json'
import './App.css'

function Component() {
  const FONT_LATO = 'lato',
    FONT_SYSTEM = 'system'
  const [textColor, setTextColor] = React.useState(colors.primary[0])
  const [bgColor, setBgColor] = React.useState(colors.dark[0])
  const [font, setFont] = React.useState(FONT_SYSTEM)

  return (
    <main
      style={{
        minHeight: '100vh',
        padding: '4em',
        backgroundColor: bgColor,
        color: textColor,
        transition: 'background-color 0.1s ease-out 0s',
      }}>
      <section style={{maxWidth: '550px'}}>
        <h3>Contrast</h3>
        <h1 style={{fontSize: '60px'}}>
          {Number(chroma.contrast(textColor, bgColor)).toFixed(2)}
        </h1>
        <Grid columns={3} divided>
          <Grid.Row>
            <Dropdown placeholder="Select font family" fluid selection labeled options={[{key: 0, value: FONT_LATO, text: 'Lato font'}, {key: 1, value: FONT_SYSTEM, text: 'System font'}]} value={font} onChange={(e, { value }) => {
              setFont(value)
            }}/>
          </Grid.Row>
          <Grid.Row>
            <Dropdown
              placeholder="Select text color"
              fluid
              search
              labeled
              selection
              onSearchChange={() => {
                console.log('gg')
              }}
              >
              <Dropdown.Menu>
                {Object.keys(colors).map(label => (
                  <>
                    <Dropdown.Header>{label}</Dropdown.Header>
                    {colors[label].map(color =>
                      <Dropdown.Item><span style={{backgroundColor: color, width: 12, height: 12}}></span>{color}</Dropdown.Item>
                    )}
                  </>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Row>
          <Grid.Row>
            <Dropdown
              placeholder="Select background color"
              fluid
              search
              selection
              labeled>
              <Dropdown.Menu>
                <Dropdown.Header>Primary</Dropdown.Header>
                <Dropdown.Menu>
                  <Dropdown.Item>Color 1</Dropdown.Item>
                  <Dropdown.Item>Color 2</Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Header>Secondary</Dropdown.Header>
              </Dropdown.Menu>
            </Dropdown>
          </Grid.Row>
        </Grid>
        <h2 style={{borderBottom: '4px solid currentColor'}}>A Sample Title</h2>
        <p>
          Every perception of color is an illusion.. ..we do not see colors as
          they really are. In our perception they alter one another. In order to
          use color effectively it is necessary to recognize that color deceives
          continually. In visual perception a color is almost never seen as it
          really is — as it physically is. This fact makes color the most
          relative medium in art.
        </p>
      </section>
    </main>
  )
}

function App() {
  return <Route path="/" component={Component} />
}

export default App
