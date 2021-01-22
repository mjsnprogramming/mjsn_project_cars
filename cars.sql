-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 22 Sty 2021, 14:25
-- Wersja serwera: 10.1.30-MariaDB
-- Wersja PHP: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `cars`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `year_of_create` int(4) DEFAULT NULL,
  `year_of_liquidation` char(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `brand`
--

INSERT INTO `brand` (`id`, `name`, `country`, `year_of_create`, `year_of_liquidation`) VALUES
(1, 'Abarth', 'Italy', 1949, '-'),
(2, 'Acadian', 'Canada', 1962, '1971'),
(3, 'Aion', 'China', 2018, '-'),
(4, 'Aixam', 'France', 1983, '-'),
(5, 'Aiways', 'China', 2017, '-'),
(6, 'Alfa Romeo', 'Italy', 1910, '-'),
(7, 'Alpine', 'France', 1955, '-'),
(8, 'Alvis', 'Great Britain', 1919, '-'),
(9, 'Andino', 'Argentina', 1967, '1978'),
(10, 'Apollo', 'Germany', 2004, '-'),
(11, 'Arcfox', 'China', 2017, '-'),
(12, 'Ariel', 'Great Britain', 1991, '-'),
(13, 'Arrinera', 'Poland', 2008, '-'),
(14, 'Ascari', 'Great Britain', 1995, '-'),
(15, 'Aspark', 'Japan', 2017, '-'),
(16, 'Aston Martin', 'Great Britain', 1913, '-'),
(17, 'Asüna', 'Canada', 1992, '1994'),
(18, 'Acura', 'Japan', 1986, '-'),
(19, 'Arash', 'Great Britain', 1999, '-'),
(20, 'Artega', 'Germany', 2006, '-'),
(21, 'Austin', 'Great Britain', 1905, '1987'),
(22, 'Autobianchi', 'Italy', 1955, '-'),
(23, 'Audi', 'Germany', 1909, '-'),
(24, 'Beaumont', 'Canada', 1966, '1969'),
(25, 'Bentley', 'Great Britain', 1919, '-'),
(26, 'Bitter', 'Germany', 1971, '-'),
(27, 'BMW', 'Germany', 1916, '-'),
(28, 'Bollinger', 'USA', 2014, '-'),
(29, 'Borgward', 'Germany', 1929, '-'),
(30, 'BYD', 'China', 2003, '-'),
(31, 'Bolwell', 'Australia', 1962, '-'),
(32, 'Bristol Cars', 'Great Britain', 1945, '-'),
(33, 'Bugatti', 'France', 1909, '-'),
(34, 'Buick', 'USA', 1903, '-'),
(35, 'Byton', 'China', 2017, '-'),
(36, 'Brilliance', 'China', 1992, '-'),
(37, 'Brabham', 'Great Britain', 1960, '-'),
(38, 'Chatenet Automobiles', 'France', 1984, '-'),
(39, 'Coda Automotive', 'USA', 2009, '2016'),
(40, 'Continental', 'USA', 1952, '1956'),
(41, 'Cupra', 'Spain', 2018, '-'),
(42, 'Czinger', 'USA', 2020, '-'),
(43, 'Cadillac', 'USA', 1902, '-'),
(44, 'Caterham', 'Great Britain', 1973, '-'),
(45, 'Chevrolet', 'USA', 1911, '-'),
(46, 'Chrysler', 'USA', 1925, '-'),
(47, 'Citroën', 'France', 1919, '-'),
(48, 'Daewoo', 'South Korea', 1967, '1999'),
(49, 'Dacia', 'Romania', 1966, '-'),
(50, 'Daihatsu', 'Japan', 1907, '-'),
(51, 'Dearcc', 'China', 2015, '-'),
(52, 'DeLorean', 'USA', 1975, '-'),
(53, 'Denza', 'China', 2010, '-'),
(54, 'Drako Motors', 'USA', 2013, '-'),
(55, 'Devel', 'UAE', NULL, NULL),
(56, 'Donkervoort', 'Netherlands', 1978, '-'),
(57, 'De Tomaso', 'Italy', 1959, '-'),
(58, 'Dodge', 'USA', 1914, '-'),
(59, 'DS', 'France', 2014, '-'),
(60, 'Datsun', 'Japan', 1931, '2013'),
(61, 'Eagle', 'USA', 1988, '1998'),
(62, 'Edsel', 'USA', 1957, '1960'),
(63, 'Elfin', 'Australia', 1958, '-'),
(64, 'Envoy', 'Canada', 1959, '1970'),
(65, 'Enzmann', 'Switzerland', 1956, '-'),
(66, 'Elemental', 'Great Britain', 2012, '-'),
(67, 'Facel Vega', 'France', 1954, '1962'),
(68, 'Faraday Future', 'USA', 2014, '-'),
(69, 'Fisker', 'USA', 2005, '-'),
(70, 'FSO', 'Poland', 1950, '-'),
(71, 'Ferrari', 'Italy', 1938, '-'),
(72, 'Fiat', 'Italy', 1899, '-'),
(73, 'Ford', 'USA', 1903, '-'),
(74, 'Geely', 'China', 1986, '-'),
(75, 'Geo', 'USA', 1989, '1997'),
(76, 'Geometry', 'China', 2019, '-'),
(77, 'GMC', 'USA', 1911, '-'),
(78, 'Ginetta', 'Great Britain', 1958, '-'),
(79, 'Goggomobil', 'Germany', 1954, '1969'),
(80, 'Grégoire', 'France', 1947, '1972'),
(81, 'Hennessey', 'USA', 1991, '-'),
(82, 'Hiphi', 'China', 2017, '-'),
(83, 'Holden', 'Australia', 1856, '2017'),
(84, 'Hycan', 'China', 2019, '-'),
(85, 'Haval', 'China', 2013, '-'),
(86, 'Hyundai', 'South Korea', 1967, '-'),
(87, 'Honda', 'Japan', 1948, '-'),
(88, 'Imperial', 'USA', 1955, '1983'),
(89, 'IMV', 'Slovenia', 1954, '1992'),
(90, 'Industrias Kaiser Argentina', 'Argentina', 1955, '1975'),
(91, 'Isdera', 'Germany', 1983, '-'),
(92, 'Izera', 'Poland', 2020, '-'),
(93, 'Hummer', 'USA', 1992, '2010'),
(94, 'Infiniti', 'Japan', 1989, '-'),
(95, 'Isuzu', 'Japan', 1937, '-'),
(96, 'Jiangling', 'China', 1952, '-'),
(97, 'Jo-Mobil', 'Russia', 2012, '-'),
(98, 'Jaguar', 'Great Britain', 1922, '-'),
(99, 'Jeep', 'USA', 1941, '-'),
(100, 'K-1 Engineering', 'Slovakia', 1991, '-'),
(101, 'Kia', 'South Korea', 1944, '-'),
(102, 'Koenigsegg', 'Sweden', 1994, '-'),
(103, 'Kandi', 'China', 2012, '-'),
(104, 'Karma', 'USA', 2015, '-'),
(105, 'Keating Supercars', 'Great Britain', 2006, '-'),
(106, 'KTM', 'Austria', 1934, '-'),
(107, 'Lagonda', 'Great Britain', 1909, NULL),
(108, 'Lamborghini', 'Italy', 1963, '-'),
(109, 'Lancia', 'Italy', 1906, '-'),
(110, 'Land Rover', 'Great Britain', 1948, '-'),
(111, 'Laraki', 'Morocco', 1999, '-'),
(112, 'Lotus', 'Great Britain', 1952, '-'),
(113, 'Ligier', 'France', 1968, '-'),
(114, 'Lexus', 'Japan', 1989, '-'),
(115, 'Leahead', 'China', 2014, '-'),
(116, 'Leapmotor', 'China', 2015, '-'),
(117, 'Li Auto', 'China', 2015, '-'),
(118, 'Lincoln', 'USA', 1917, '-'),
(119, 'Lordstown Motors', 'USA', 2019, '-'),
(120, 'Lucid Motors', 'USA', 2007, '-'),
(121, 'Lada', 'Russia', 1966, '-'),
(122, 'Marcos', 'Great Britain', 1959, '-'),
(123, 'Marussia', 'Russia', 2007, '2014'),
(124, 'Melkus', 'Germany', 1950, '-'),
(125, 'Maserati', 'Italy', 1914, '-'),
(126, 'Mclaren', 'Great Britain', 1989, '-'),
(127, 'Meteor', 'Canada', 1948, '1976'),
(128, 'Mazzanti', 'Italy', 2002, '-'),
(129, 'Maybach', 'Germany', 1909, '-'),
(130, 'Mercury', 'USA', 1939, '2011'),
(131, 'Mercedes', 'Germany', 1881, '-'),
(132, 'Mitsuoka', 'Japan', 1968, '-'),
(133, 'Mitsubishi', 'Japan', 1870, '-'),
(134, 'Mazda', 'Japan', 1920, '-'),
(135, 'MG', 'Great Britain', 1924, '-'),
(136, 'Mosler', 'USA', 1985, '-'),
(137, 'Mini', 'Great Britain', 2000, '-'),
(138, 'Monarch', 'Canada', 1946, '1961'),
(139, 'Monteverdi', 'Switzerland', 1967, '1984'),
(140, 'Morgan', 'Great Britain', 1909, '-'),
(141, 'Morris', 'Great Britain', 1910, '1984'),
(142, 'MTX', 'Czech Republic', 1969, '-'),
(143, 'Neta', 'China', 2014, '-'),
(144, 'NIO', 'China', 2016, '-'),
(145, 'Noble', 'Great Britain', 1999, '-'),
(146, 'Nissan', 'Japan', 1933, '-'),
(147, 'Ora', 'China', 2018, '-'),
(148, 'Oldsmobile', 'USA', 1897, '2004'),
(149, 'Opel', 'Germany', 1862, '-'),
(150, 'Panhard', 'France', 1891, '-');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=151;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
