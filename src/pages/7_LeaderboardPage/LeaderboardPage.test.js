import React from "react";
import { render, screen, cleanup, waitFor } from "@testing-library/react";
import LeaderboardPage from "../7_LeaderboardPage"
import {MemoryRouter} from "react-router-dom"
import Leaderboard from "../../components/14_Leaderboard"
import {rest} from 'msw'
import {setupServer} from 'msw/node'

afterEach(()=>cleanup())

test("Renders the title, board and button",async ()=>{
    render(
    <MemoryRouter >
        <LeaderboardPage />
    </MemoryRouter>
    )
    expect(screen.getByText(/Leaderboard/i)).toBeInTheDocument();
    expect(screen.getByRole('button', {class:/my-button/i})).toBeInTheDocument();
    await screen.findByTestId("leaderboard-table")
})

const server = setupServer(
    rest.get('https://www.dreamlo.com/lb/60a8e2c18f40bb64ec94690b/json', (req,res,ctx) =>{
        return res(
            ctx.status(200),
            ctx.json({dreamlo:{
            leaderboard:{
                entry:[
                    {name: "Jimothy", score: "512", text:"micah"},
                    {name: "R2D2", score: "1337", text:"bottts"},
                ]
            }
        }}))
    })
)
beforeAll(()=> server.listen())
// afterEach(()=>server.resetHandlers())
afterAll(()=> server.close())

test("Renders the mocked api results correctly",async ()=>{
    render(<Leaderboard />)
    await waitFor(() =>
        screen.getByText('Jimothy'),
    )
    await waitFor(() =>
        screen.getByText('1337'),
    )
})