import React, { useState, useMemo, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import styles from '../styles.js/styles';
import { makeStyles } from '@material-ui/core/styles';
import getData from '../services/getData';

const useStyles = makeStyles(styles);

const alreadyRemoved = []

function TinderCards() {
    const classes = useStyles();
    const [characters, setCharacters] = useState([]);
    const [lastDirection, setLastDirection] = useState();

    useEffect(() => {
        getData(setCharacters);
    }, [])


    console.log(characters);
    const childRefs = useMemo(() => Array(characters.length).fill(0).map(i => React.createRef()), [])

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        // setLastDirection(direction)
        // alreadyRemoved.push(nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
        // charactersState = charactersState.filter(character => character.name !== name)
        // setCharacters(charactersState)
    }

    const swipe = (dir) => {
        const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
        if (cardsLeft.length) {
            const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
            const index = characters.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
            alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
            childRefs[index].current.swipe(dir) // Swipe the card!
        }
    }

    return (
        <div>
            <div className={classes.cardContainer}>
                {characters.map((character, index) =>
                    <TinderCard ref={childRefs[index]} className={classes.swipe} key={character.name} onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                        <div style={{ backgroundImage: 'url(' + character.url + ')' }} className={classes.card}>
                            <h3 className={classes.cardName}>{character.name}</h3>
                        </div>
                    </TinderCard>
                )}

            </div>
        </div>
    )
}

export default TinderCards;