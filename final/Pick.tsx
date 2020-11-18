export { };

type Account = {
    accountName: string;
    createdAt: string;
}

type Data = {
    name: string;
    age: number;
    accounts: [Account]
}

type ProfileCardProps = {
    data: Pick<Data, 'name' | 'age'>
}

type AccountListProps = {
    data: Pick<Data, 'accounts'>
}


function getData(): Data {
    return {
        name: 'Abinav',
        age: 26,
        accounts: [{
            accountName: 'Test account',
            createdAt: 'someDay',
        }],
    };
}


const ProfileCard = (props: ProfileCardProps) => {
    return <span>props.data</span>;
};

const AccountList = (props: AccountListProps) => {
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