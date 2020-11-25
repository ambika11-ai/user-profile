import React, { Component } from 'react'
import  Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CapitalizedText from "./CapitalizedText";

export default class RandomUser extends Component {
    state={
        loading:true
    }   

    async componentDidMount(){
        const url="https://randomuser.me/api/";
        const response=await fetch(url);
        const data=await response.json();
        this.setState({person:data.results[0],loading:false}); 
    }
    
   
    
    render() {
      if(this.state.loading){
          return <div>Loading.....</div>
      }
      if(!this.state.person){
        return <div>didn't get a person</div>
    }
    let dateObj=new Date(this.state.person.dob.date);
    let month= dateObj.getMonth() +1;
    let year=dateObj.getFullYear();
    let date=dateObj.getDate();
    let result=`${date} - ${month} - ${year}`;
    
    
        return (
            <div style={{marginLeft:'150px',marginRight:'90px',minHeight:'350px',width:'1150px',backgroundColor:'#dcdee0',marginTop:'150px'}}>
            <Paper style={{display:"flex",marginLeft:'50px',marginRight:'50px',marginTop:'70px',height:'330px'}}>
             
                 <Avatar src={this.state.person.picture.large} alt='pic' style={{padding:'50px', width:'150px',height:'150px',borderRadius:'25px'}}>
               a
               </Avatar>
                <box style={{display:'flex',flexDirection:'column'}}>
                <Box style={{display:'flex',paddingTop:'50px',}}>  
                <Typography variant='h5' style={{justifyContent:'space-between'}}>
             {this.state.person.name.title } &nbsp;
                {this.state.person.name.first} &nbsp;
                  {this.state.person.name.last}  </Typography>
                </Box>
                <Box> <Typography variant='h6' style={{color:'#bfbaba'}}><CapitalizedText text={this.state.person.gender}/></Typography> </Box>
                <Box> <Typography variant='h6' style={{}}>{this.state.person.email}</Typography> </Box>
                <Box> <Typography variant='h6' style={{color:'#969292',marginTop:'20px'}}>{this.state.person.phone}</Typography> </Box>
                <Box> <Typography variant='h6' style={{color:'#969292'}}>{this.state.person.cell}</Typography> </Box>
                </box>
                <box style={{display:'flex',flexDirection:'column',paddingTop:'80px',marginLeft:'100px'}}> 
                <Box> <Typography variant='h6' style={{}}>{result}</Typography> </Box>
                <Box> <Typography variant='h6' style={{}}>{this.state.person.dob.age}</Typography> </Box>
                <Box> <Typography variant='subtitle1' >
                    {this.state.person.location.street.number},
                    {this.state.person.location.street.name},
                    {this.state.person.location.street.city} ,
                    {this.state.person.location.city},
                    {this.state.person.location.state} ,
                    {this.state.person.location.country},
                    {this.state.person.location.pincode} 
                    </Typography> </Box>
                </box>
            </Paper>
            </div>
        )
    }
}
