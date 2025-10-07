import User from "./User"
import SectionHeader from "./SectionHeader"
import Columns from "./Columns"

export default function OurTeam() {
    return (
        <div className="our-team-d page">
            <h1 className="our-team-header-d">Our Team</h1>
            <hr></hr>
            <Columns>
                <div className="column">
                    <SectionHeader>Leaders</SectionHeader>
                    <User name="JLCitrus" username="JLCitrus007" />
                    <User name="CaptainEterk" username="CaptainEterk" />
                </div>
                <div className="column">
                    <SectionHeader>Coders</SectionHeader>
                    <User name="SpieleTyp (Leader)" username="SpieleTyp" />
                    <User name="adeoguntechno" username="adeoguntechno" />
                    <User name="Lurdumoloch" username="Lurdumoloch" />
                    <User name="starr" username="starr" />
                    <User name="expelliarmus8" username="expelliarmus8" />
                    <User name="henw_" username="code5omgggg" />
                    <User name="cooldevv1" username="cooldevv1" />
                </div>
                <div className="column">
                    <SectionHeader>Designers</SectionHeader>
                    <User name="muzlovescereal (Leader)" username="muzlovescereal" />
                    <User name="Artsign" username="Artsign" />
                    <User name="randomstuffstick" username="randomstuffstick" />
                    <User name="-AstronTech-" username="-AstronTech-" />
                    <User name="Vict-2010" username="Vict-2010" />
                </div>
                <div className="column">
                    <SectionHeader>Sound Artists</SectionHeader>
                    <User name="Paulottix (Leader)" username="Paulottix_Music" />
                </div>
            </Columns>
        </div>
    )
}