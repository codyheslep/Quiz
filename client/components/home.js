import React from 'react'
import { Container, Icon, Segment, Reveal, Card, Item, Image,Grid, Popup, Header, Divider } from 'semantic-ui-react'
import Media from './media'

const style = {
  borderRadius: .5,
  opacity: 0.8,
  padding: '2px',
}

const Home = () => {
  return (
    <div className="wcontent">
      {/* <Header as='h2' icon textAlign='center'>
      <Icon name="home" size="huge" circular color="red" />
    </Header> */}
    <Divider hidden />
    <Divider horizontal section as="h2">Story</Divider>
    <Divider hidden />
    <Divider hidden/>
    <Grid stackable>
    <Grid.Row columns={3}>
      <Grid.Column>
      <Container>
        <Reveal animated='fade'>
        <Reveal.Content visible>
           <Image src="./child.png" className="pixel"/>
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image src="./childtext.png" className="pixel"/>
        </Reveal.Content>
       </Reveal>
       </Container>
      </Grid.Column>
      <Grid.Column >
      <Reveal animated='fade'>
        <Reveal.Content visible>
           <Image src="./kid.png" className="pixel"/>
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image src="./kidtext.png" className="pixel"/>
        </Reveal.Content>
       </Reveal>
      </Grid.Column>
      <Grid.Column >
      <Reveal animated='fade'>
        <Reveal.Content visible>
           <Image src="./college.png" className="pixel"/>
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image src="./collegetext.png" className="pixel"/>
        </Reveal.Content>
       </Reveal>
      </Grid.Column>

      </Grid.Row>
      <Grid.Row columns={3}>
      <Grid.Column >
      <Reveal animated='fade'>
        <Reveal.Content visible>
           <Image src="./phd.png" className="pixel"/>
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image src="./phdtext.png" className="pixel"/>
        </Reveal.Content>
       </Reveal>
      </Grid.Column>
      <Grid.Column >
      <Reveal animated='fade'>
        <Reveal.Content visible>
           <Image src="./bartending.png" className="pixel"/>
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image src="./bartendingtext.png" className="pixel"/>
        </Reveal.Content>
       </Reveal>
      </Grid.Column>
      <Grid.Column >
      <Reveal animated='fade'>
        <Reveal.Content visible>
           <Image src="./fullstack.png" className="pixel"/>
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image src="./fullstacktext.png" className="pixel"/>
        </Reveal.Content>
       </Reveal>
      </Grid.Column>
    </Grid.Row>
    </Grid>
    <Divider hidden />
    </div>
  )
}

export default Home

// <Popup
//           trigger={<Image src="./college.png" className="pixel"/>}
//           content="In college, when he wasn't busy studying or working, Cody started to dabble in programming, teaching himself JAVA and JAVASCRIPT. With his new tools he wrote a stat collection app and site for a self-run beer pong league, pouring every free second he had into improving the program."
//           position="bottom center"
//           inverted
//           size="large"
//           wide
//           style={style}
//           />
