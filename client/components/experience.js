import React from 'react'
import { Header, Divider, Icon, Container, Grid, Card, Item } from 'semantic-ui-react'

const Experience = () => {
  return (
    <div className='wcontent'>
    <Divider hidden />
    <Divider horizontal section as="h2">Resume</Divider>
    <Divider hidden />
    {/* <Card.Group itemsPerRow={2} className='linkedcards'>
      <Card raised>
        <Card.Content>
          <Card.Description>
          <Icon name="linkedin" size="big"/>
          www.linkedin.com/in/clheslep
        </Card.Description>
        </Card.Content>
        </Card>
        <Card raised>
        <Card.Content>
          <Card.Description>
          <Icon name="github" size="big"/>
          www.github.com/codyheslep
        </Card.Description>
        </Card.Content>
        </Card>
      </Card.Group> */}
      <Container textAlign='centered' id="contactinfo">
          <Icon color="black" size="huge" name="linkedin" />  <a href="http://www.linkedin.com/in/clheslep">www.linkedin.com</a><Icon color="black" size="huge" name="github" /> <a href="http://www.github.com/codyheslep"> www.github.com</a>
          </Container>
      <Divider hidden />
    <Divider horizontal section as="h2">Skills</Divider>
    <Divider hidden />
    <Grid stackable>
    <Grid.Row columns={3}>
    <Grid.Column>
      <Item>
      <Header as='h3'>Technical Skills:</Header>
        <Item.Content verticalAlign='middle'>Javascript</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Node.js</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Express</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>React</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Redux</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>HTML&CSS</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Java</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>PHP</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Photoshop</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
      </Item>
    </Grid.Column>
    <Grid.Column>
    <Item>
      <Header as='h3'>Soft Skills:</Header>
        <Item.Content verticalAlign='middle'>Communication</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Interpersonal</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Leadership</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Problem Solving</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Work Ethic</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Creativity</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Time Management</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Attention to Detail</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Modesty</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
      </Item>
    </Grid.Column>
    <Grid.Column>
    <Item>
      <Header as='h3'>Other Skills:</Header>
        <Item.Content verticalAlign='middle'>Cookie Making</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Dog Sitting</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Drink Making</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Drink Consuming</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Magic the Gathering</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
        <Icon  disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Fifa 16</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Running</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
        <Icon  disabled name="child" size="big"/>
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Frozen Pizza Making</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
        <Icon  disabled name="child" size="big" />
        <Icon disabled name="child" size="big" />
      </Item>
      <Item>
        <Item.Content verticalAlign='middle'>Sleeping</Item.Content>
        <Icon name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
        <Icon name="child" size="big" color="yellow"/>
        <Icon   name="child" size="big" color="yellow"/>
        <Icon  name="child" size="big" color="yellow"/>
      </Item>
    </Grid.Column>
    </Grid.Row>
    </Grid>

    <Divider hidden />
    <Divider horizontal section as="h2">Education</Divider>
    <Divider hidden />
    <Card.Group centered itemsPerRow={4}>
    <Card raised>
      <Card.Content>
      <Card.Header>Fullstack Academy</Card.Header>
      <Card.Meta>2018</Card.Meta>
      <Card.Description>Javascript Coding Bootcamp</Card.Description>
      </Card.Content>
    </Card>
    <Card raised>
      <Card.Content>
      <Card.Header>University of Chicago</Card.Header>
      <Card.Meta>2012-2016</Card.Meta>
      <Card.Description>PhD Ancient History (unfinished)</Card.Description>
      </Card.Content>
    </Card>
    <Card raised>
      <Card.Content>
      <Card.Header>University of Missouri</Card.Header>
      <Card.Meta>2010-2012</Card.Meta>
      <Card.Description>MA Ancient History</Card.Description>
      </Card.Content>
    </Card>
    <Card raised>
      <Card.Content>
      <Card.Header>University of Arizona</Card.Header>
      <Card.Meta>2005-2010</Card.Meta>
      <Card.Description>BA Classics</Card.Description>
      </Card.Content>
    </Card>
    </Card.Group>


     <Divider hidden />
    <Divider horizontal section as="h2">Experience</Divider>
    <Divider hidden />
    <Card.Group centered itemsPerRow={3}>
    <Card raised>
      <Card.Content>
      <Card.Header>Server</Card.Header>
      <Card.Meta>2017-2018</Card.Meta>
      <Card.Description>Restoration Hardware</Card.Description>
      </Card.Content>
    </Card>
    <Card raised>
      <Card.Content>
      <Card.Header>Bar Manager</Card.Header>
      <Card.Meta>2013-2017</Card.Meta>
      <Card.Description>Bandera</Card.Description>
      </Card.Content>
    </Card>
    <Card raised>
      <Card.Content>
      <Card.Header>Teaching Assistant</Card.Header>
      <Card.Meta>2012-2015</Card.Meta>
      <Card.Description>University of Chicago</Card.Description>
      </Card.Content>
    </Card>
    <Card raised>
      <Card.Content>
      <Card.Header>Teaching Assistant</Card.Header>
      <Card.Meta>2010-2012</Card.Meta>
      <Card.Description>University of Missouri</Card.Description>
      </Card.Content>
    </Card>
    <Card raised>
      <Card.Content>
      <Card.Header>Captain</Card.Header>
      <Card.Meta>2009-2010</Card.Meta>
      <Card.Description>Hacienda del Sol</Card.Description>
      </Card.Content>
    </Card>
    <Card raised>
      <Card.Content>
      <Card.Header>Server</Card.Header>
      <Card.Meta>2008-2009</Card.Meta>
      <Card.Description>Zona 78</Card.Description>
      </Card.Content>
    </Card>
    <Card raised>
      <Card.Content>
      <Card.Header>Server</Card.Header>
      <Card.Meta>2002-2008</Card.Meta>
      <Card.Description>Vincent's Market Bistro</Card.Description>
      </Card.Content>
    </Card>
    </Card.Group>

    </div>
  )
}

export default Experience

{/* <iframe src="https://docs.google.com/document/d/e/2PACX-1vSqTp-nFDB4sxoB03JyCZ9qlUIKscyYP5dI_JxvketJq6xBoW_1gLANrs_y3yuTsaeujIqLJhlB8R9A/pub?embedded=true" className="resume"></iframe> */}
