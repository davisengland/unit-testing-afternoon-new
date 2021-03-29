import { shortenText } from '../utils/functions'
import { wordCount, attachUserName } from '../../server/utils'
import { shortText, longText, posts, users } from './__data__/testData'

test('shortenText does not alter a string under 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(shortText.length)
})

test('Make sure it shortens text over 100 characters and adds 3 periods at the end', () => {
    const shorterText = shortenText(longText)
    expect(shorterText).not.toHaveLength(longText.length)
    expect(shorterText.slice(-3)).toBe('...')
})

test('wordCount will correctly sum up the number of words in an array full of posts', () => {
    expect(wordCount(posts)).toBe(233)
})

test('attachUserName should check to make sure that passing in users and posts will attach a displayName property to every post', () => {
    const newPosts = attachUserName(users, posts)
    expect(newPosts[0]).toHaveProperty('displayName')
})

test('attachUserName should remove any posts with no matching user', () => {
    const newPosts = attachUserName(users, posts)
    const oldPost = posts[5]
    expect(newPosts).not.toContainEqual(oldPost)
})