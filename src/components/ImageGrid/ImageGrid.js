import React, { Component } from 'react';
import ContentContainer from '../ContentContainer/ContentContainer';
import Grid from './Grid';
import { SectionTitle } from '../Text/Text';
import SpinnerContainer from '../Spinner/SpinnerContainer';
import Figure from './Figure';
import ShowMoreButton from './ShowMoreButton';

export class ImageGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showOneCol   : 3,
			showTwoCol   : 6,
			showThreeCol : 12
		};
		this.showMoreImages = this.showMoreImages.bind(this);
	}

	showMoreImages() {
		this.setState(st => ({
			showOneCol   : st.showOneCol + 3,
			showTwoCol   : st.showTwoCol + 6,
			showThreeCol : st.showThreeCol + 9
		}));
	}

	render() {
		const { showOneCol, showTwoCol, showThreeCol } = this.state;
		const { title, content, loading, showTitle, showSubtitle } = this.props;

		return (
			<ContentContainer>
				<SectionTitle>{title}</SectionTitle>

				{loading ? (
					<SpinnerContainer />
				) : (
					<Grid>
						{content.map((c, i) => {
							return (
								<Figure
									content={c}
									key={c.id}
									index={i}
									showOneCol={showOneCol}
									showTwoCol={showTwoCol}
									showThreeCol={showThreeCol}
									showTitle={showTitle}
									showSubtitle={showSubtitle}
								/>
							);
						})}
					</Grid>
				)}

				<ShowMoreButton
					showMoreImages={this.showMoreImages}
					content={content}
					showOneCol={showOneCol}
					showTwoCol={showTwoCol}
					showThreeCol={showThreeCol}
				/>
			</ContentContainer>
		);
	}
}

export default ImageGrid;
