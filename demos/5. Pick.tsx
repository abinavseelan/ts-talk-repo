export { };

type Account = {
    name: string;
}

type Data = {
    name: string;
    age: number;
    accounts: [Account]
}

function getData(): Data {
    return {
        name: 'Avatar Aang',
        age: 110,
        accounts: [{
            name: 'Test account',
        }],
    };
}

const ProfileCard = (props) => {
    return <span>props.data</span>;
};

const AccountList = (props) => {
    return <span>props.data</span>;
};

const Container = () => {
    const data = getData();

    return (
        <>
            <ProfileCard
                data={{}}
            />

            <AccountList
                data={{}}
            />
        </>
    )
};