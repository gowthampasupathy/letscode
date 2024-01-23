<Container><h3>Test Case</h3></Container>
      <Container><Row><Col xs={12} md={3}><button type="button" value={"1"} style={{backgroundColor:this.state.col}}>Test Case 1</button></Col>
      <Col xs={12} md={3}><button type="button" value={"1"} style={{backgroundColor:this.state.col}}>Test Case 2</button></Col>
      <Col xs={12} md={3}><button type="button" value={"1"} style={{backgroundColor:this.state.col}}>Test Case 3</button></Col></Row></Container>
      
      
              
              <h5 style={{display:'flex',justifyContent:'start'}}>Custom Input</h5>
              <Container>
              <textarea id="input"   cols={90} 
                  rows={7} onChange={this.userInput} placeholder="Enter The Input Here" style={{backgroundColor: "#272822",
                        color: "white", overflowY:'hidden',resize:'none'}}></textarea>
              </Container>
              <h5  style={{display:'flex',justifyContent:'start'}} >Your Output</h5>
              <Container>
              <textarea id="output"   cols={90}
                  rows={11} placeholder="Your Output Will Be Displayed Here" style={{backgroundColor: "#272822",
                        color: "white",overflowY: "hidden" ,resize:'none'}} ></textarea>
              </Container>