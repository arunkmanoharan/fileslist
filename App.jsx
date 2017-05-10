import React  from 'react';
import {Link} from 'react-router';
import Reorder from 'react-reorder';

const App = () => {
	
	let arr = [
	'<tr><td>1</td><td>2</td></tr>',
	'<tr><td>3</td><td>4</td></tr>',
	'<tr><td>5</td><td>2</td></tr>'
  ];
	
  return (
  <div>
  <table style={{width:'100%',border: '0px solid #000000',}}>
		<div style={{width:'100%',border: '0px solid #000000',}}>
			<div style={{width:'100%'}}>
			<tr style={{width:'100%'}}>
				<td style={{maxWidth:'25%',width:'25%',border: '1px solid #000000',}}>cccccccssssss ssssssssssssssss</td>
				<td style={{maxWidth:'6%',width:'6%',border: '1px solid #000000',}}>cccccccssssss</td>
				<td style={{maxWidth:'21%',width:'21%',border: '1px solid #000000',}}>cccccccssssss</td>
				<td style={{maxWidth:'10%',width:'10%',border: '1px solid #000000',}}>ssssssss</td>
				<td style={{maxWidth:'30%',width:'30%',border: '1px solid #000000',}}>ccccc</td>
				<td style={{maxWidth:'5%',width:'5%',border: '1px solid #000000',}}>ccccc</td>
				<td style={{maxWidth:'5%',width:'5%',border: '1px solid #000000',}}>ccccc</td>
			</tr>
			</div>
		</div>
		<div style={{width:'100%'}}>
			<div style={{width:'100%'}}>
			<tr style={{width:'100%'}}>
				<td style={{maxWidth:'25%',width:'25%',border: '1px solid #000000',}}>cccccccssssss ssssssssssssssss</td>
				<td style={{maxWidth:'6%',width:'6%',border: '1px solid #000000',}}>cccccccssssss</td>
				<td style={{maxWidth:'21%',width:'21%',border: '1px solid #000000',}}>cccccccssssss</td>
				<td style={{maxWidth:'10%',width:'10%',border: '1px solid #000000',}}>ssssssss</td>
				<td style={{maxWidth:'30%',width:'30%',border: '1px solid #000000',}}>ccccc</td>
				<td style={{maxWidth:'5%',width:'5%',border: '1px solid #000000',}}>ccccc</td>
				<td style={{maxWidth:'5%',width:'5%',border: '1px solid #000000',}}>ccccc</td>
			</tr>
			</div>
			<div style={{width:'100%'}}>
			<tr style={{width:'100%'}}>
				<td style={{maxWidth:'25%',width:'25%',border: '1px solid #000000',}}>cccccccssssss ssssssssssssssss</td>
				<td style={{maxWidth:'6%',width:'6%',border: '1px solid #000000',}}>cccccccssssss</td>
				<td style={{maxWidth:'21%',width:'21%',border: '1px solid #000000',}}>cccccccssssss</td>
				<td style={{maxWidth:'10%',width:'10%',border: '1px solid #000000',}}>ssssssss</td>
				<td style={{maxWidth:'30%',width:'30%',border: '1px solid #000000',}}>ccccc</td>
				<td style={{maxWidth:'5%',width:'5%',border: '1px solid #000000',}}>ccccc</td>
				<td style={{maxWidth:'5%',width:'5%',border: '1px solid #000000',}}>ccccc</td>
			</tr>
			</div>
		</div>
	</table>

	  <table style={{width:'100%',border: '0px solid #000000',}}>

			<tr style={{width:'100%'}}>
				<td style={{maxWidth:'25%',width:'25%',border: '1px solid #000000',}}>cccccccssssss ssssssssssssssss</td>
				<td style={{maxWidth:'6%',width:'6%',border: '1px solid #000000',}}>cccccccssssss</td>
				<td style={{maxWidth:'21%',width:'21%',border: '1px solid #000000',}}>cccccccssssss</td>
				<td style={{maxWidth:'10%',width:'10%',border: '1px solid #000000',}}>ssssssss</td>
				<td style={{maxWidth:'30%',width:'30%',border: '1px solid #000000',}}>ccccc</td>
				<td style={{maxWidth:'5%',width:'5%',border: '1px solid #000000',}}>ccccc</td>
				<td style={{maxWidth:'5%',width:'5%',border: '1px solid #000000',}}>ccccc</td>
			</tr>

			<tr style={{width:'100%'}}>
				<td style={{maxWidth:'25%',width:'25%',border: '1px solid #000000',}}>cccccccssssss ssssssssssssssss</td>
				<td style={{maxWidth:'6%',width:'6%',border: '1px solid #000000',}}>cccccccssssss</td>
				<td style={{maxWidth:'21%',width:'21%',border: '1px solid #000000',}}>cccccccssssss</td>
				<td style={{maxWidth:'10%',width:'10%',border: '1px solid #000000',}}>ssssssss</td>
				<td style={{maxWidth:'30%',width:'30%',border: '1px solid #000000',}}>ccccc</td>
				<td style={{maxWidth:'5%',width:'5%',border: '1px solid #000000',}}>ccccc</td>
				<td style={{maxWidth:'5%',width:'5%',border: '1px solid #000000',}}>ccccc</td>
			</tr>

			<tr style={{width:'100%'}}>
				<td style={{maxWidth:'25%',width:'25%',border: '1px solid #000000',}}>cccccccssssss ssssssssssssssss</td>
				<td style={{maxWidth:'6%',width:'6%',border: '1px solid #000000',}}>cccccccssssss</td>
				<td style={{maxWidth:'21%',width:'21%',border: '1px solid #000000',}}>cccccccssssss</td>
				<td style={{maxWidth:'10%',width:'10%',border: '1px solid #000000',}}>ssssssss</td>
				<td style={{maxWidth:'30%',width:'30%',border: '1px solid #000000',}}>ccccc</td>
				<td style={{maxWidth:'5%',width:'5%',border: '1px solid #000000',}}>ccccc</td>
				<td style={{maxWidth:'5%',width:'5%',border: '1px solid #000000',}}>ccccc</td>
			</tr>
	</table>
	</div>
  );
};

export default App