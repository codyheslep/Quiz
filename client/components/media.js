import React from 'react'
import { Embed, Container, Responsive, Item, Divider, Segment, Header, Grid } from 'semantic-ui-react'
import Pictures from './pictures'

const Media = () => {
  return (
    <Container className='wcontent'>
    <Divider hidden />
    <Divider horizontal section as="h2">Projects</Divider>
    <Divider hidden />
      <Grid stackable columns={2}>
        <Grid.Row>
        <Grid.Column >
            <Item className="item">
              <Item.Content verticalAlign='middle'>
                <Item.Header as="h3">Pothole Patrol</Item.Header>
                <Item.Meta className="meta"> <a href="http://www.github.com/team-311/pothole-patrol-web">github.com/team-311/pothole-patrol-web </a></Item.Meta>
                <Item.Description className='text'>Implemented over the course of two weeks with four junior developers, Pothole Patrol is a custom suite of apps to make it easier for both residents to report potholes and for the city to efficiently repair them. </Item.Description>
                <Item.Extra>
                  <Item.Description>July 2018</Item.Description>
                </Item.Extra>
              </Item.Content>
            </Item>
            <Embed id='0CN3UoDTUW8' source='youtube' placeholder='./logo5.jpg' />
          </Grid.Column>
          <Grid.Column >
            <Item className="item">
              <Item.Content verticalAlign='middle'>
                <Item.Header as="h3">Beethoven's Fifth Massacre</Item.Header>
                <Item.Meta className="meta"> <a href="http://www.github.com/codyheslep/beethoven">github.com/codyheslep/beethoven </a></Item.Meta>
                <Item.Description className='text'>Working on my own, I utilized the Phaser game engine to create a classic arcade, side-scrolling shooter based around classical music icons. Beyond the coding, I implemented entirely custom animations and sprites.</Item.Description>
                <Item.Extra>
                  <Item.Description>June 2018</Item.Description>
                </Item.Extra>
              </Item.Content>
            </Item>
            <Embed id='1b87F_DL9Q0' source='youtube' placeholder='./beethoven1.jpg' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider hidden/>
      <Divider hidden/>
      <Divider hidden/>
    <Divider horizontal section as="h2">Photographs</Divider>
    <Divider hidden />
      <Pictures />
      <Divider hidden/>
    <Responsive as={Segment} minWidth={750}>
    <Divider horizontal section as="h2">Writing</Divider>
    <Divider hidden />
    <Grid conatiner stackable columns={2} >
        <Grid.Row>
          <Grid.Column>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vTLyQNiRUcmdl9G_9jAtddkallUM6Pog9SnzHLplCf_HrWpKtU08L2PNCJXvDBuMJ0xiVslYQPxeMrf/pub?embedded=true" className="doc"></iframe>
          </Grid.Column>
          <Grid.Column>
          <iframe src="https://docs.google.com/document/d/e/2PACX-1vTf2x42WJMF8mZuttRhbpm_c4gYVTrj4PHclqWsel2eyDZKXW3E8b2Psup76EhHyoN62QTR7yT5-LKm/pub?embedded=true" className="doc"></iframe>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </Responsive>
      {/* <Divider horizontal section as="h2">My Writing</Divider>
      <Container className="writing">
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vT8Oq87TuPm-9wrVzdNxn0o8OLSuH-0mz2GojCeEwWZrZxSV2hI51jQpJ9ltOqXq97BvuTqfwJNhxqN/pub?embedded=true" className="doc"></iframe>
      <iframe src="https://docs.google.com/document/d/e/2PACX-1vTf2x42WJMF8mZuttRhbpm_c4gYVTrj4PHclqWsel2eyDZKXW3E8b2Psup76EhHyoN62QTR7yT5-LKm/pub?embedded=true" className="doc"></iframe>
      </Container> */}


      {/* <Grid conatiner stackable columns={2} >
        <Grid.Row>
          <Grid.Column>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vT-pjoY3vg_oCVXqcGB6deHOq0x3NX43wesrTpKgzfp2DRAeinaITOzLQPlaskrjLS_BwnksCWKgWL8/pub?embedded=true" className="doc"></iframe>
          </Grid.Column>
          <Grid.Column>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vTLyQNiRUcmdl9G_9jAtddkallUM6Pog9SnzHLplCf_HrWpKtU08L2PNCJXvDBuMJ0xiVslYQPxeMrf/pub?embedded=true" className="doc"></iframe>
          </Grid.Column>
          <Grid.Column>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vT8Oq87TuPm-9wrVzdNxn0o8OLSuH-0mz2GojCeEwWZrZxSV2hI51jQpJ9ltOqXq97BvuTqfwJNhxqN/pub?embedded=true" className="doc"></iframe>
          </Grid.Column>
          <Grid.Column>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vTf2x42WJMF8mZuttRhbpm_c4gYVTrj4PHclqWsel2eyDZKXW3E8b2Psup76EhHyoN62QTR7yT5-LKm/pub?embedded=true" className="doc"></iframe>
          </Grid.Column>
        </Grid.Row>
      </Grid> */}
    </Container>
  )
}

export default Media
