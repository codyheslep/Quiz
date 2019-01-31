
import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  state = { activeItem: "story"}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu  pointing borderless secondary>
      <Menu.Item>
          <img src='/roman 1(1).png' />
        </Menu.Item>
        <Menu.Item name='story' active={activeItem === 'story'}
          as={Link}
           to="./" onClick={this.handleItemClick} />
        <Menu.Item
          name='projects'
          as={Link}
          to="./media"
          active={activeItem === 'projects'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='experience'
          active={activeItem === 'experience'}
          as={Link}
          to="./experience"
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='contact'
          active={activeItem === 'contact'}
          as={Link}
          to="./contact"
          onClick={this.handleItemClick}
        />
      </Menu>
    //   <Menu icon borderless vertical>
    //   <Menu.Menu borderless>
    //  < Menu.Item
    //                 as={Link}
    //                 name="home"
    //                 to="/"
    //                 //content="my story"
    //               >
    //               <Icon name="home" size="huge" color="yellow" />
    //               </Menu.Item>
    //               < Menu.Item
    //                 as={Link}
    //                 name="projects"
    //                 to="/media"
    //                 //content="projects"
    //               >
    //               <Icon name="lightbulb" size="huge" color="yellow" />
    //               </Menu.Item>
    //               < Menu.Item
    //                 as={Link}
    //                 name="experience"
    //                 to="/experience"
    //                 //content="experience"
    //               >
    //               <Icon name="rocket" size="huge" color="yellow" />
    //               </Menu.Item>
    //               < Menu.Item
    //                 as={Link}
    //                 name="contact"
    //                 to="/contact"
    //                 //content="contact"
    //               >
    //               <Icon name="pencil" size="huge" color="yellow" />
    //               </Menu.Item>
    //             </Menu.Menu>
    //           </Menu>
    )
  }
}
// import React from 'react'
// import { Menu, Image, Button, Sticky, Segment, Header,  Icon, Sidebar, Divider } from 'semantic-ui-react'
// import { Link } from 'react-router-dom'

// class Navbar extends React.Component {
// constructor () {
//   super()
//     this.state = {
//       visible: false
//     }
//   }

//   handleButtonclick () {
//     console.log("click", this.state.visible)
//     this.setState({visible: !this.state.visible})
//     console.log("click", this.state.visible)
//   }

//   handleSidebarHide = () => this.setState({visible: false})

//   render() {
//     return (
//       <div>
//         <Button className="menubutton" inverted onClick={this.handleButtonClick}>Menu</Button>
//             <Menu.Item as='a'>
//               <Icon name='home' />
//               Home
//             </Menu.Item>
//             <Menu.Item as='a'>
//               <Icon name='gamepad' />
//               Games
//             </Menu.Item>
//             <Menu.Item as='a'>
//               <Icon name='camera' />
//               Channels
//             </Menu.Item>
//       </div>
//     )
//   }
// }

// export default Navbar

// <Sidebar.Pushable as={Segment}>
//       <Sidebar as={Menu} animation='overlay' icon='labeled' vertical visible width='wide'>
//       <Menu icon vertical>
//           <Menu.Menu>
//             < Menu.Item
//               as={Link}
//               name="home"
//               to="/"
//               //content="my story"
//             >
//             <Icon name="home" size="huge" color="yellow" />
//             </Menu.Item>
//             < Menu.Item
//               as={Link}
//               name="projects"
//               to="/media"
//               //content="projects"
//             >
//             <Icon name="lightbulb" size="huge" color="yellow" />
//             </Menu.Item>
//             < Menu.Item
//               as={Link}
//               name="experience"
//               to="/experience"
//               //content="experience"
//             >
//             <Icon name="rocket" size="huge" color="yellow" />
//             </Menu.Item>
//             < Menu.Item
//               as={Link}
//               name="contact"
//               to="/contact"
//               //content="contact"
//             >
//             <Icon name="pencil" size="huge" color="yellow" />
//             </Menu.Item>
//           </Menu.Menu>
//         </Menu>
//         </Sidebar>
//         </Sidebar.Pushable>
//         <Divider hidden />
