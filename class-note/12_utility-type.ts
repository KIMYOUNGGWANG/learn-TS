// 유틸리티타입
// 유틸리티타입은 이미 정의해 놓은 타입을 변환할 때 사용하기 좋은 타입
// 기존의 인터페이스나 제네릭으로도 충분하지만, 유틸리티를 사용하면 더 간결한 문법으로 정의 가능

interface Product {
    id : number;
    name : string;
    price : number;
    brand : string;
    stock : number;
}

// 상품목록받아오기 API
const fetchProducts = ():Promise<Product[]> => {
    return //
}

interface ProductDetail {
    id : number;
    name : string;
    price : number;
}
// 목록의 데이터가 들어올수도있고 안들어올수도있다.(속성이 다를 수 있다.) 그래서 새로 interface를 생성하게되면, 중복코드가 발생하게된다.
// Pick라는 것을 사용한다(<interface 이름, 빼올 것들>).

// 특정 상품의 상세정보를 나타내는 함수
type ShoppingItem = Pick<Product, "id"|"name"|'price'>

const displayProductDetail = (productItem:ShoppingItem) => {

}

// interface UpdateProduct{
//     id? : number;
//     name? : string;
//     price? : number;
//     brand? : string;
//     stock? : number;
// }

type UpdateProduct = Partial<Product> // Product인터페이스의 속성을 옵셔널로 처리한 것.

// Partial을 풀어보자
// type Partial<T> = {
//     [P in keyof T]?: T[P];
// };

// Partial구현하기
interface UserProfile {
    username : string;
    email: string;
    profilePhotoUrl : string;
}

// 1.업데이트할때 (partial사용 x시)
// interface UserProfileUpdate {
//     username ?: string;
//     email?: string;
//     profilePhotoUrl ?: string;
// }

// 2.업데이트할때 (interface를 이용해서 타입지정)
// type UserProfileUpdate={
//     username? : UserProfile['username'];
//     email?: UserProfile['email'];
//     profilePhotoUrl? :UserProfile['profilePhotoUrl']; 
// }

// 3. 업데이트할때 (in operator사용한 맵드타입)
// type UserProfileUpdate = {
//     [p in 'username'|'email'|'profilePhotoUrl']? : UserProfile[p]
// }

type UserProfileKeys = keyof UserProfile;

type UserProfileUpdate = {
    [p in keyof UserProfile]? : UserProfile[p]
}

// 4. 제네릭사용
type Subset<T> = {
    [p in keyof T]?:T[p];
}

var obj : Partial<UserProfile>;

// 특정 상품 정보를 업데이트
const updateProductItem = (productItem :UpdateProduct) => {

}

// 그 반대로 지정한 속성만 제거하고 타입을 정의하는 것을 Omit타입이라고한다.

interface AddressBook {
    name : string;
    phone : number;
    address : string;
    company : string;
}

const phoneBook : Omit<AddressBook,"address"> = {
    name : 'tony',
    phone : 1234,
    company:'위잇'
}

