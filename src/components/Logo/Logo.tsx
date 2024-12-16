import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { INVOICE_LOGO } from '../../utils/common';
import { readFileAsDataURL } from '../../utils/helpers';

export const Logo = () => {
	const [myLogo, setMyLogo] = useState<string | null>(null);
	const [objectFit, setObjectFit] = useState<'cover' | 'contain'>('cover');

	const fileInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		chrome.storage.local.get(['logo', 'objectFit'], (result) => {
			if (result.logo) {
				setMyLogo(result.logo);
			}
			if (result.objectFit) {
				setObjectFit(result.objectFit as 'cover' | 'contain');
			}
		});
	}, []);

	const handleClick = () => {
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (!file) return;

		try {
			const base64Image = await readFileAsDataURL(file);
			chrome.storage.local.set({ logo: base64Image });
			setMyLogo(base64Image);
		} catch (error) {
			console.error('Error reading file:', error);
		}
	};

	const toggleObjectFit = () => {
		const newObjectFit = objectFit === 'cover' ? 'contain' : 'cover';
		setObjectFit(newObjectFit);
		chrome.storage.local.set({ objectFit: newObjectFit });
	};

	const handleToggleObjectFit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		toggleObjectFit();
	};

	return (
		<ImageWrapper
			onClick={() => {
				handleClick();
			}}
		>
			<HiddenFileInput
				type="file"
				accept="image/*"
				ref={fileInputRef}
				onClick={(event) => event.stopPropagation()}
				onChange={handleFileChange}
			/>
			<Image src={myLogo || INVOICE_LOGO} $objectFit={objectFit} />
			<HoverButton onClick={handleToggleObjectFit}>Toggle Fit</HoverButton>
		</ImageWrapper>
	);
};

const ImageWrapper = styled.div`
	width: 250px;
	height: 200px;
	position: relative;
	cursor: pointer;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.4);
		opacity: 0;
		transition: opacity 0.3s;
		z-index: 2;
	}

	&::before {
		content: '+';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: white;
		font-size: 5rem;
		opacity: 0;
		z-index: 3;
		transition: opacity 0.3s;
		pointer-events: none;
	}

	&:hover::after {
		opacity: 1;
	}

	&:hover::before {
		opacity: 1;
	}

	&:hover button {
		opacity: 1;
	}
`;

const Image = styled.img<{ $objectFit: 'cover' | 'contain' }>`
	width: 100%;
	height: 100%;
	z-index: 1;
	object-fit: ${(props) => props.$objectFit};
`;

const HiddenFileInput = styled.input`
	display: none;
`;

const HoverButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	background-color: rgba(255, 255, 255, 0.8);
	border: none;
	border-radius: 5px;
	padding: 5px 10px;
	cursor: pointer;
	font-size: 0.9rem;
	z-index: 4;
	opacity: 0;
	transition: opacity 0.3s;

	&:hover {
		background-color: rgba(255, 255, 255, 1);
	}
`;
