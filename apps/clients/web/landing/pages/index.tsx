// import next config in any page file to somehow make next aware of correct folder structure... MAGIC
// see https://github.com/nrwl/nx/issues/9017#issuecomment-1284740346
import path from 'path';
path.resolve('./next.config.js');

import { H1, View } from '@shared';
// import { log } from '@utils';
// import { initializeApp } from 'firebase/app';

// const devConfig = {};
// const prodConfig = {};
// const firebaseConfig = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export function Index() {
    // const app = initializeApp(firebaseConfig);
    // log(app);
    return (
        <View className="flex-1 items-center justify-center p-3">
            <H1>Welcome to Universal Fullstack Template!👋</H1>
        </View>
    );
}

export default Index;
