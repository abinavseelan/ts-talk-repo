export { };

type Account = {
    name: string;
    createdAt: string;
}

type Data = {
    name: string;
    age: number;
    accounts: [Account]
}

function getData(): Data {
    return {
        name: 'Abinav',
        age: 26,
        accounts: [{
            name: 'Test account',
            createdAt: 'someDay',
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
                data={{
                    name: data.name,
                    age: data.age,
                }}
            />

            <AccountList
                data={{
                    accounts: data.accounts
                }}
            />
        </>
    )
};