import React from 'react'
import SimpleCounter from './components/SimpleCounter'
import TextInputMirror from './components/TextInputMirror'
import ThemeToggler from './components/ThemeToggler'
import FilterableList from './components/FilterableList'
import LoginForm from './components/LoginForm'
import CharacterCounter from './components/CharacterCounter'
import TodoList from './components/TodoList'
import ImageGallery from './components/ImageGallery'
import Accordion from './components/Accordion'
import BoxResizer from './components/BoxResizer'
import ColorPicker from './components/ColorPicker'
import ProgressBar from './components/ProgressBar'
import ParentComponent from './components/ParentComponent'
import AccordionWithActiveStyle from './components/AccordionWithActiveStyle'
import DraggableSquare from './components/DraggableSquare'

function App() {

	return (
		<div style={{ marginBottom: '20px' }}>
			<SimpleCounter />
			<TextInputMirror />
			<ThemeToggler />
			<FilterableList />
			<LoginForm />
			<CharacterCounter />
			<TodoList />
			<ImageGallery />
			<Accordion />
			<ParentComponent />
			<BoxResizer />
			<ColorPicker />
			<ProgressBar />
			<AccordionWithActiveStyle />
			<DraggableSquare />
		</div>
	)
}

export default App
