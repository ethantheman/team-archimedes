import React from 'react';
import './style/tweet.scss';

class Tweet extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
	 return (
		<li className="tweetBody">
			<div className="header row">
				<img className="avatar" src={this.props.tweet.avatar_url}></img>
				<h3>
					<a target="_blank" href={'https://twitter.com/'+this.props.tweet.user_name}><span>@</span>{this.props.tweet.user_name}</a>
				</h3>
			</div>

			<div className="tweetText row">
				<p className="col col-6-of-6" dangerouslySetInnerHTML={{ __html: this.props.tweet.tweetBody }}></p>
				<span className="timeStamp col right-3-of-6">{this.props.tweet.created_at}</span>
			</div>
			<hr/>
		</li>
		)
	}
}

export default Tweet;